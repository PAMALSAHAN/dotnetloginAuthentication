import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fb:FormBuilder, private http:HttpClient) { }
  readonly BaseUri="http://localhost:5000/api"; //meka thami base uri eka use karanna tina

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
    if (ConfirmPassword.errors==null || 'passwordMismatch' in ConfirmPassword.errors) {
      //erros deka naththam meke athulata enawa
      if (fbi.get('Password').value!=ConfirmPassword.value) {
        ConfirmPassword.setErrors({passwordMismatch:true});
      }
      else{
        ConfirmPassword.setErrors(null);
      }
      
    }

  }

  // register kiyala function ekak liyanawa
  register(){
    var body={
      UserNamePt :this.formModel.value.UserName,
      EmailPt :this.formModel.value.Email,
      PasswordPt :this.formModel.value.Password,
      ConfirmPasswordPt :this.formModel.value.ConfirmPassword,
    }
    return this.http.post(this.BaseUri+'/ApplicationUser/Register',body);
  }
  
}
