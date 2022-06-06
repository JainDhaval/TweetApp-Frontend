import { NavigationBarComponent } from './../navigation-bar/navigation-bar.component';
import { LoginModel } from './Login';
import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isAuthenticated:boolean; 
  message:String = null;
  
  constructor(private loginService:LoginService,private route:Router) { }

  ngOnInit(): void {
    if(this.loginService.isLogin()){
      this.route.navigate(["/home"]);
    }
    this.isAuthenticated = this.loginService.isLogin();
    if(this.isAuthenticated){
      (document.getElementById("navBar") as HTMLElement).style.display = "flex";
    }
    else{
      (document.getElementById("navBar") as HTMLElement).style.display = "none";
    }
  }

  onLogin(login: LoginModel){
    this.loginService.login(login).subscribe(data =>{
      this.message = null;
      console.log(data);
      this.loginService.setUsername(`${data.loginId}`);
      this.route.navigate(["/home"]);
    },error=>{
      this.message= error.error.message;
    })
  }

}
