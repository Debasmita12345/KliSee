import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { LoginService } from 'src/app/service/login/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  myLoginFrm: FormGroup;
  id: string;
  show: boolean;
  message: string;
  success: boolean;

  constructor(public loginService: LoginService,
              public router: Router) { 
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
    console.log(this.myLoginFrm)
    // console.log(this.myLoginFrm)
    // console.log(this.myLoginFrm.status)

    this.loginService.getuserId(details).subscribe(res=>{
      console.log(res);
      // this.id = res.data.user_id;
      // console.log(this.id)
      this.message = res.message;
      console.log(this.message);
      this.success = res.success;
      sessionStorage.setItem('userId', res.data.user_id )

      console.log(sessionStorage.getItem('userId'))
      setTimeout(() => {
        if(res.success){
          this.router.navigate(['/home']);
        }
    }, 1000);  //1s
  })
    // }, err=>{
    //   console.log(err);
    // }
  
    
    
  }
  ngOnInit(){
    // console.log(this.myLoginFrm)
    if (this.myLoginFrm.status==='VALID'){
      this.show=false;
    }
    else{
      this.show=true;
    }
    
  }
  
  
  hide= true;
}
