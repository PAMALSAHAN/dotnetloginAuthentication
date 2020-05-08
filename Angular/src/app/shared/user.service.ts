import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormControl, EmailValidator, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fb:FormBuilder) { }

  formModel=this.fb.group({
    UserName:['',Validators.required],
    Email:['',[Validators.required, Validators.email]],
    FullName:[''],
    Password :this.fb.group({
      Password:['',[Validators.required,Validators.minLength(4)]],
      ConfirmPassword:['',Validators.required]
    },{validators:this.checkPassword})

    
  
  });

  checkPassword(fbi:FormGroup){ //fbi kiyanne meke parameter ekak eka 
    let ConfirmPassword=fbi.get('ConfirmPassword');
    if (fbi.get('Password').errors==null || 'passwordMismatch' in ConfirmPassword.errors) {
      //erros deka naththam meke athulata enawa
      if (fbi.get('Password').value!=ConfirmPassword.value) {
        ConfirmPassword.setErrors({passwordMismatch:true});
      }
      else{
        ConfirmPassword.setErrors(null);
      }
      
    }

  }
  
}
