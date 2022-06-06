import { UserModel } from './../users/User';
import { SearchUserService } from './search-user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {

  users: UserModel;
  searchusername: string;
  constructor(private searchUserService?:SearchUserService, private route?:Router) { }

  ngOnInit(): void {
  }

  getUser(searchUsername:string){
    this.searchUserService.getUserByUsername(searchUsername).subscribe(data=>{
      this.users = data;
      (document.getElementById("userId") as HTMLInputElement).value = data.loginId;
      (document.getElementById("user") as HTMLElement).style.display = "block";
      (document.getElementById("username") as HTMLElement).innerHTML = this.users.loginId;
      (document.getElementById("name") as HTMLElement).innerHTML = this.users.firstName + ' ' + this.users.lastName;
      (document.getElementById("mobileNumber") as HTMLElement).innerHTML = ''+this.users.mobileNumber;
      (document.getElementById("emailId") as HTMLElement).innerHTML = this.users.emailId;
      
    },error=>{
      alert(error.error.message);
    })
  }

  viewTweet(){
    (document.getElementById("user") as HTMLElement).style.display = "none";
    this.searchusername = (document.getElementById("userId") as HTMLInputElement).value;
    this.route.navigate(["/usertweets"],{queryParams: {username: this.searchusername}});
  }

}
