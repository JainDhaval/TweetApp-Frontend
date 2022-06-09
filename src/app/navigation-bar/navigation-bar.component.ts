import { SearchUserService } from './../search-user/search-user.service';
import { HomeService } from './../home/home.service';
import { LoginService } from './../login/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchUserComponent } from '../search-user/search-user.component';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  isAuthenticated: boolean;
  searchUsername: string = null;

  constructor(public loginService:LoginService,private router?:Router,private searchUserService?:SearchUserService,private homeService?:HomeService){}

  ngOnInit(): void {
    this.isAuthenticated = this.loginService.isLogin();
  }

  logout(){
    console.log("logout");
    if(this.loginService.logout()){
      this.ngOnInit();
      this.router.navigate(['/login'])
    }
  }

  searchUser(){
    if(this.searchUsername == null){
      alert("Please Enter Username first");
    }
    else{
        let usercomponent = new SearchUserComponent(this.searchUserService);
        usercomponent.getUser(this.searchUsername);
    }
  }

}
