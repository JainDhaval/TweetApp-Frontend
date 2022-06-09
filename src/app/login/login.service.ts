import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http?: HttpClient) { }

  login(data: any):Observable<any>{
    return this.http.post(environment.baseUrl+`/api/v1.0/tweets/login`,data);
  }

  setUsername(userName:string){
    localStorage.setItem("username",userName);
    return true;
  }

  getUsername(){
    return localStorage.getItem("username");
  }

  isLogin(){
    let username=localStorage.getItem("username");

    if(username==undefined || username === '' || username == null){
      return false;
    }
    else{
      return true;
    }
  }

  logout(){
    localStorage.removeItem("username");
    return true;
  }
}
