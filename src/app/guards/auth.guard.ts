import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';

export const authGuard: CanActivateFn = (route, state) => {
 
    const authService = inject(AuthService);
    const router = inject(Router);
    const toast = inject(ToastrService);

    if (authService.isLogIn()) {
      if (router.url.length > 0) {
        let menu = route.url[0].path;
        if (menu === "users") {
          if (authService.getUserRole() === "ADMIN") {
            return true;
          }
          return false;
        }
      }
      return true;
    }
    router.navigate(['/login']);
    toast.error('Login required');
    return false;

};
