import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  title = 'authentication';
  showMenu = false;
  showUsers = false;
  action!: string;

  constructor(private router: Router, private authService: AuthService) { }

  ngDoCheck(): void {
    const currentUrl = this.router.url;
    if (currentUrl === "/login" || currentUrl === "/register") {
      this.showMenu = false;
    } else {
      this.showMenu = true;
    }

    const role = this.authService.getUserRole();
    if (role === "ADMIN") {
      this.showUsers = true;
    } else {
      this.showUsers = false;
    }

    if (this.authService.isLogIn()) {
      this.action = "Logout";
    } else {
      this.action = "Login";
    }
  }
}
