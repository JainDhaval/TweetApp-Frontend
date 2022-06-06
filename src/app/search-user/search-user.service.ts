import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchUserService {

  constructor(private http:HttpClient) { }

  getUserByUsername(username:String):Observable<any>{
    return this.http.get('http://localhost:8080/api/v1.0/tweets/user/search/'+username);
  }
}
