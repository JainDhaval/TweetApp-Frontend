import { environment } from './../../environments/environment.prod';
import { Observable } from 'rxjs';
import { PostTweetModel } from './Tweet';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http:HttpClient) { }

  postTweet(postTweet:PostTweetModel, username:String):Observable<any>{
    console.log(postTweet);
    return this.http.post(environment.baseUrl+`/api/v1.0/tweets/`+username+`/add`,postTweet);
  }
}
