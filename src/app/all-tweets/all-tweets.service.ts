import { environment } from './../../environments/environment';
import { ReplyTweetModel } from './Reply';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AllTweetsService {

  constructor(private http:HttpClient) { }

  getAllTweets():Observable<any>{
    return this.http.get(environment.baseUrl+`/api/v1.0/tweets/all`);
  }

  likeTweet(loginId:string, tweetId:string):Observable<any>{
    return this.http.put(environment.baseUrl+`/api/v1.0/tweets/`+loginId+`/like/`+tweetId,null);
  }

  postComments(replyTweet:ReplyTweetModel,loginId:string, tweetId:string):Observable<any>{
    return this.http.post(environment.baseUrl+`/api/v1.0/tweets/`+loginId+`/reply/`+tweetId,replyTweet);
  }
}
