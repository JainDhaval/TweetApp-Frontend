import { environment } from './../../environments/environment.prod';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserTweetsService {

  constructor(private http:HttpClient) { }

  getTweetsByUsername(username:string):Observable<any>{
    return this.http.get(environment.baseUrl+`/api/v1.0/tweets/`+username);
  }
}
