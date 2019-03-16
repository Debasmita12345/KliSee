import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { LoginService } from 'src/app/service/login/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  myLoginFrm: FormGroup;
  id: string;

  constructor(public loginService: LoginService) { 
    this.myLoginFrm = new FormGroup({
      email: new FormControl ('', [Validators.required,Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    })

  }

  loginFormSubmit(){
    this.loginList()
  }

  loginList(){
    const details = {
      'email': this.myLoginFrm.value.email,
      'password': this.myLoginFrm.value.password
    }
    console.log(details)

    this.loginService.getuserId(details).subscribe(res=>{
      console.log(res);
      this.id = res.data.user_id;
      console.log(this.id)
    })
  }
  
  
  hide= true;
}
