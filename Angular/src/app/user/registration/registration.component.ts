import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(public service:UserService,private tostr:ToastrService) { }

  

  ngOnInit(): void {
    //this.service.formModel.reset(); //ng lifecycle hook 
  }

  OnSubmit(){
    // const val=this.service.formModel.value
    // console.log(val.UserName);
    
    this.service.register().subscribe(
      (res:any)=>{ 
        if(res.succeeded){
          console.log("if condition succeeded");
          this.tostr.success("New user added!","Registration Successful");
          this.service.formModel.reset(); // success nam reset karanawa mokada duplicate data 
          //enter nowenna

        }
        else{
          ///ehama nowe nam api balanna one 
          console.log("else errors occur");
          
          res.errors.forEach(element => {
            switch (element.code) {
              case 'DuplicateUserName':
                this.tostr.error("user name already taken","Registration Failed");
                  //display duplicate user name
                break;
            
              default:
                //registration failed
                this.tostr.error(element.description,"Registration Failed");
                break;
            }
          });
        }
      },
      err=>{
        //get error to the console 
        console.log(err);
      }
    );
    
  }

  

}
