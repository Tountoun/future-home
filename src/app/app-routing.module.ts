import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserListingComponent } from './user-listing/user-listing.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DetailsComponent } from './details/details.component';
import { authGuard } from './guards/auth.guard';
import { PostHouseComponent } from './post-house/post-house.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'users', component: UserListingComponent, canActivate: [authGuard] },
  { path: 'details/:id', component: DetailsComponent, canActivate: [authGuard] },
  { path: 'location/new', component: PostHouseComponent, canActivate: [authGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
