import { ReplyTweetModel } from './../all-tweets/Reply';
import { LoginService } from './../login/login.service';
import { AllTweetsService } from './../all-tweets/all-tweets.service';
import { UserTweetsService } from './user-tweets.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-tweets',
  templateUrl: './user-tweets.component.html',
  styleUrls: ['./user-tweets.component.css']
})
export class UserTweetsComponent implements OnInit {

  loginUsername:string;
  username:string;
  message:string;
  tweets:any;
  constructor(private router: ActivatedRoute, private userTweetService:UserTweetsService, private allTweetsService:AllTweetsService, private loginService:LoginService, private route:Router) { }

  ngOnInit(): void {
    if(!this.loginService.isLogin()){
      this.route.navigate(["/login"]);
    }
    this.loginUsername = this.loginService.getUsername();
    this.router.queryParams.subscribe(data =>{
      this.username = data.username;
    });

    this.userTweetService.getTweetsByUsername(this.username).subscribe(data => {
      this.tweets = data;
    },error => {
      this.message= "No Tweet Posted by User";
    });
  }

  liketweet(tweetId:string){
    this.allTweetsService.likeTweet(this.loginUsername,tweetId).subscribe(data => {
      this.ngOnInit();
      if((document.getElementById(tweetId) as HTMLElement).style.color == "black"){
        (document.getElementById(tweetId) as HTMLElement).style.color = "red";
      }
      else{
        (document.getElementById(tweetId) as HTMLElement).style.color = "black";
      }
    },error => {
      alert(error.error.message);
    })
  }

  postReply(replyTweet:ReplyTweetModel,tweetId:string){
    replyTweet.date = new Date().toLocaleString();
    this.allTweetsService.postComments(replyTweet,this.username,tweetId).subscribe(data => {
      console.log(data);
      this.ngOnInit();
    },error => {
      alert(error.error.message);
    })
  }

}
