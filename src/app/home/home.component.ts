import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  loginUser: any;

  constructor(private authService: AuthService) {
    this.loginUser = this.authService.getLoginUser();
  }

}
