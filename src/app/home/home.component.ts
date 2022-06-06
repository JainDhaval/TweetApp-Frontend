import { HomeService } from './home.service';
import { LoginService } from './../login/login.service';
import { PostTweetModel } from './Tweet';
import { UsersService } from './../users/users.service';
import { UserModel } from './../users/User';
import { Component, OnInit } from '@angular/core';
import { AllTweetsComponent } from '../all-tweets/all-tweets.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users: UserModel;
  date: any;
  searchusername: string;

  constructor(private loginService?:LoginService,private homeService?:HomeService,private route?:Router) { }

  ngOnInit(): void {
    if(!this.loginService.isLogin()){
      this.route.navigate(["/login"]);
    }
    else{
      (document.getElementById("navBar") as HTMLElement).style.display = "flex";
    }

  }


  postTweet(postTweet: PostTweetModel){
    this.date = new Date().toLocaleString();
    postTweet.date = this.date;
    postTweet.tweetLikes = 0;
    let username = this.loginService.getUsername();
    this.homeService.postTweet(postTweet,username).subscribe(data => {
      alert(data.message);
      let allTweets = new AllTweetsComponent();
      this.ngOnInit();
      allTweets.ngOnInit();
    },error=>{
      alert(error.error.message);
    });
  }

}
