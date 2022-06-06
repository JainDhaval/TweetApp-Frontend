import { UserRegistrationModel } from './UserRegister';
import { RegisterService } from './register.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  confirmPasssword: string;

  constructor(private registerService:RegisterService,private route:Router) { }

  ngOnInit(): void {
  }

  registerUser(userRegistrationModel:UserRegistrationModel){
    console.log(userRegistrationModel);
    if(this.confirmPasssword === userRegistrationModel.password){
      this.registerService.registerUser(userRegistrationModel).subscribe(data =>{
        alert(data.message);
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
