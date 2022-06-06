import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  registerUser(data: any):Observable<any>{
    return this.http.post(`http://localhost:8080/api/v1.0/tweets/register`,data);
  }
}
