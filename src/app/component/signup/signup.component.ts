import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { SignUpService } from 'src/app/service/signup/sign-up.service';
import { Router } from '@angular/router';
// import { PasswordValidation } from '../../password-validation';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

  myForm: FormGroup;
  show: boolean;
  id: string;
  message: string;
  password: string;
  confirm_password: string;
  success: boolean;
  
  constructor(public signupService: SignUpService,
              public router: Router) { 
    this.myForm=new FormGroup({
      name: new FormControl('', [Validators.required,  Validators.pattern("^[a-zA-Z ]*$")]),
      email: new FormControl ('', [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
      password: new FormControl('', [Validators.required,Validators.minLength(6)]),
      confirm_password: new FormControl('', [Validators.required])
    })
    //   {
    //     validator: PasswordValidation.MatchPassword // your validation method
      
    // })
  }



  //   // confirm_password: new FormControl('', [this.checkIfMatchingPasswords('this.password', 'this.confirm_password')])
    // },{
    //   validator:passwordValidators.PasswordShouldMatch('password', 'confirm_password')
    // })
    // {
    // //     validator: MustMatch('password', 'confirm_password')
    // //   });

  //   this.myForm = this.formBuilder.group({
  //     firstName: ['', Validators.required],
  //     lastName: ['', Validators.required],
  //     email: ['', [Validators.required, Validators.email]],
  //     password: ['', [Validators.required, Validators.minLength(6)]],
  //     confirmPassword: ['', Validators.required]
  // }, {
  //     validator: MustMatch('password', 'confirmPassword')
  // });
  // console.log(this.myForm)


  checkIfMatchingPasswords(passwordKey: string, passwordConfirmationKey: string) {
    return (group: FormGroup) => {
      let passwordInput = group.controls[passwordKey],
          passwordConfirmationInput = group.controls[passwordConfirmationKey];
      if (passwordInput.value !== passwordConfirmationInput.value) {
        return passwordConfirmationInput.setErrors({notEquivalent: true})
      }
      else {
          return passwordConfirmationInput.setErrors(null);
      }
    }
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
    // console.log(user)
    // console.log(this.myForm)
    
    this.signupService.getUserId(user).subscribe(res=>{
      console.log(res);
      // this.id = res.data.user_id;
      // console.log(this.id);
      this.message = res.message;
      console.log(this.message);
      this.success = res.success;     
      // setTimeout(() => {
      //     this.router.navigate(['/login']);
      // }, 1000);  //1s
      setTimeout(() => {
        if(res.success){
          this.router.navigate(['/login']);
        }
    }, 1000); 
    })
  }

  ngOnInit(){
    if (this.myForm.status==='VALID'){
      this.show=false;
    }
    else{
      this.show=true;
    }
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
