import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { UsersComponent } from './users/users.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { AllTweetsComponent } from './all-tweets/all-tweets.component';
import { MyTweetsComponent } from './my-tweets/my-tweets.component';
import { UserTweetsComponent } from './user-tweets/user-tweets.component';
import { SearchUserComponent } from './search-user/search-user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NavigationBarComponent,
    ForgotPasswordComponent,
    UsersComponent,
    SideMenuComponent,
    AllTweetsComponent,
    MyTweetsComponent,
    UserTweetsComponent,
    SearchUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
