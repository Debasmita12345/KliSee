import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SignUpService } from 'src/app/service/signup/sign-up.service';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent  {

  myForm: FormGroup;
  show: boolean;
  id: string;
  
  constructor(public signupService: SignUpService) { 
    this.myForm=new FormGroup({
      name: new FormControl('', [Validators.required,  Validators.pattern("^[a-zA-Z ]*$")]),
      email: new FormControl ('', [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
      password: new FormControl('', [Validators.required,Validators.minLength(6)]),
      password1: new FormControl('', [Validators.required]),
    })
  
  }
  
  FormSubmit(){
    this.getList();
  }
  getList(){
    const user = {
      'name' : this.myForm.value.name,
      'email': this.myForm.value.email,
      'password': this.myForm.value.password
    }
    console.log(user)
    
    
    this.signupService.getUserId(user).subscribe(res=>{
      console.log(res);
      this.id = res.data.user_id;
      console.log(this.id);
    })
  }

  // onSubmit(){
  //   console.log(this.myForm)
  //   if (this.myForm.status==='VALID'){
  //     this.show=false;
  //   }
  //   else{
  //     this.show=true;
  //   }
  // }

  hide = true;

}
