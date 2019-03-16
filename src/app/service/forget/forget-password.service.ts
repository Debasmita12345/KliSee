import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ForgetPasswordService {

  constructor( private http: HttpClient ) { }

  getEmail(email){
    var body = "email=" + email
    return this.http.post(`http://navkiraninfotech.com/Customers/custom/klisee/api/forgot_password?`+ body, '' )
  }
}
