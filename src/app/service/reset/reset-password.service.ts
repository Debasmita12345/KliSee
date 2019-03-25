import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResetPasswordService {

  constructor(private http: HttpClient) { }

  // getEmail(passWord){
  //   var body= "user_id=" + "&new_password=" + "&authentication_code="
  //   return this.http.post(`http://navkiraninfotech.com/Customers/custom/klisee/api/password_setting?`+body, '')
  // }
}
