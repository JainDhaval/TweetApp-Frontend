import { UsersService } from './users.service';
import { Component, OnInit } from '@angular/core';
import { UserModel } from './User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:UserModel[];
  math = Math;
  temp = Array;

  constructor(private userService:UsersService,private route: Router) { }
  
  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(data => {
       this.users = data;
      console.log(this.users);
    })
  }

  viewTweet(userId:string){
    this.route.navigate(["/usertweets"],{queryParams: {username: userId}});
  }

}
