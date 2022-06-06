import { ReplyTweetModel } from './Reply';
import { LoginService } from './../login/login.service';
import { AllTweetsService } from './all-tweets.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-tweets',
  templateUrl: './all-tweets.component.html',
  styleUrls: ['./all-tweets.component.css']
})
export class AllTweetsComponent implements OnInit {

  tweets:any;
  username:string;
  replyTweet:ReplyTweetModel = null;
  reply:string;

  constructor(private allTweetsService?:AllTweetsService, private loginService?: LoginService) { }

  ngOnInit(): void {
    this.allTweetsService.getAllTweets().subscribe(data => {
      this.tweets = data;
      console.log(data);
    },error => {
      console.log(error.error.message);
    });

    this.username = this.loginService.getUsername();
  }

  liketweet(tweetId:string){
    this.allTweetsService.likeTweet(this.username,tweetId).subscribe(data => {
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
