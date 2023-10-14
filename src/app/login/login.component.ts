import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../utils/types';
import { catchError, Observable, of } from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  loginUser!: User;

  constructor(
    private authService: AuthService,
    private router: Router,
    private builder: FormBuilder,
    private toast: ToastrService
  ) {
    sessionStorage.clear();
    this.loginForm = this.builder.group({
      username: this.builder.control('', Validators.required),
      password: this.builder.control('', Validators.required),
    });
  }

  proceedLogin() {
    if (this.loginForm.valid) {
      this.authService.getUserByCode(this.loginForm.value.username)
        .pipe(
          catchError((err) => {
            return of(null);
          })
        )
        .subscribe((response: User | null) => {
          if (response) {
            this.loginUser = response;
            if (this.loginUser.password === this.loginForm.value.password) {
              sessionStorage.setItem('username', this.loginUser.id);
              sessionStorage.setItem('role', this.loginUser.role.valueOf());
              this.router.navigate(['']);
            } else {
              this.toast.error("Invalid credentials");
            }
          } else {
            this.toast.error("Invalid credentials");
          }
        });
    } else {
      this.toast.warning("Please enter a valid data");
    }
  }

}
