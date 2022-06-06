import { ForgotPasswordService } from './forgot-password.service';
import { Component, OnInit } from '@angular/core';
import { ForgotPasswordModel } from './forgot-password';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  confirmPasssword: string;
  username: string;
  constructor(private forgotPasswordService:ForgotPasswordService,private route:Router) { }

  ngOnInit(): void {
  }

  forgotPassword(forgotpassword: ForgotPasswordModel){
    if(this.confirmPasssword === forgotpassword.password){
      console.log(this.username);
      this.forgotPasswordService.forgotPassword(forgotpassword,this.username).subscribe(data =>{
        console.log(data);
        this.route.navigate(["/login"]);
      },error=>{
        alert(error.error.message);
      })
    }
    else{
      alert("Password and Confirm Password should be same");
    }
  }

}
