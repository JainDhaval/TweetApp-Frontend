import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  getAllUsers():Observable<any>{
    return this.http.get('http://localhost:8080/api/v1.0/tweets/users/all');
  }

  getUserByUsername(username:String):Observable<any>{
    return this.http.get('http://localhost:8080/api/v1.0/tweets/user/search/'+username);
  }
}
