import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CountrySortPipe, ContinentSortPipe } from './utils/pipes';
import { UserListingComponent } from './user-listing/user-listing.component';
import { UpdatePopUpComponent } from './update-pop-up/update-pop-up.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from 'src/app/material.module';
import { ToastrModule } from 'ngx-toastr';
import { LocationComponent } from './location/location.component';
import { DetailsComponent } from './details/details.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PostHouseComponent } from './post-house/post-house.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    UserListingComponent,
    UpdatePopUpComponent,
    CountrySortPipe,
    ContinentSortPipe,
    LocationComponent,
    DetailsComponent,
    PostHouseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
