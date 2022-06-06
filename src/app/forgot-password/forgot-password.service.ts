import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {

  constructor(private http: HttpClient) { }

  forgotPassword(data:any,username:string):Observable<any>{
    return this.http.post(`http://localhost:8080/api/v1.0/tweets/`+username+`/forgot`,data);
  }
}
