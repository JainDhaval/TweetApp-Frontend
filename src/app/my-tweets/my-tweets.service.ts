import { environment } from './../../environments/environment.prod';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MyTweetModel } from './myTweets';

@Injectable({
  providedIn: 'root'
})
export class MyTweetsService {

  constructor(private http:HttpClient) { }

  getTweetsByUsername(username:string):Observable<any>{
    return this.http.get(environment.baseUrl+`/api/v1.0/tweets/`+username);
  }

  deleteTweet(username:string,tweetId:string):Observable<any>{
    return this.http.delete(environment.baseUrl+`/api/v1.0/tweets/`+username+`/delete/`+tweetId);
  }

  updateTweet(username:string,tweetId:string,updateTweet:MyTweetModel):Observable<any>{
    return this.http.put(environment.baseUrl+`/api/v1.0/tweets/`+username+`/update/`+tweetId,updateTweet);
  }
}
