import { AllTweetsService } from './../all-tweets/all-tweets.service';
import { MyTweetsService } from './my-tweets.service';
import { LoginService } from './../login/login.service';
import { Component, OnInit } from '@angular/core';
import { AllTweetsComponent } from '../all-tweets/all-tweets.component';
import { MyTweetModel } from './myTweets';

@Component({
  selector: 'app-my-tweets',
  templateUrl: './my-tweets.component.html',
  styleUrls: ['./my-tweets.component.css']
})
export class MyTweetsComponent implements OnInit {

  tweets:any;
  username:string;
  message:any = null;

  constructor(private loginService?: LoginService,private myTweetService?: MyTweetsService,private allTweetService?:AllTweetsService) { }

  ngOnInit(): void {
    this.username = this.loginService.getUsername();
    this.tweets = null;
    this.myTweetService.getTweetsByUsername(this.username).subscribe(data => {
      this.tweets = data;
    },error => {
      this.message=error.error.message;
    });
  }

  updateTweets(updateTweet:MyTweetModel,tweetId:string){
    console.log(updateTweet);
    (document.getElementById("closeButton") as HTMLElement).click();
    this.myTweetService.updateTweet(this.username,tweetId,updateTweet).subscribe(data => {
      console.log(data);
      this.ngOnInit();
    },error=>{
      this.message = error.error.message;
    });
  }

  deleteTweet(tweetId:string){
    this.myTweetService.deleteTweet(this.username,tweetId).subscribe(data =>{
      alert(data.message);
      this.ngOnInit();
    },error=>{
      alert(error.error.message);
      this.ngOnInit();
    })
  }

  liketweet(tweetId:string){
    let allTweets = new AllTweetsComponent(this.allTweetService,this.loginService);
    allTweets.username = this.username;
    allTweets.liketweet(tweetId);
    this.ngOnInit();
    if((document.getElementById(tweetId) as HTMLElement).style.color == "black"){
      (document.getElementById(tweetId) as HTMLElement).style.color = "red";
    }
    else{
      (document.getElementById(tweetId) as HTMLElement).style.color = "black";
    }
  }
}
