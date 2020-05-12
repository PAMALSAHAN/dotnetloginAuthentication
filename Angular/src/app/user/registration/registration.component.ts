import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(public service:UserService) { }

  

  ngOnInit(): void {
    this.service.formModel.reset(); //ng lifecycle hook 
  }

  OnSubmit(){
    // const val=this.service.formModel.value
    // console.log(val.UserName);
    console.log('pamal');
    this.service.register().subscribe(
      (res:any)=>{
        if(res.succeeded){
          this.service.formModel.reset(); // success nam reset karanawa mokada duplicate data 
          //enter nowenna

        }
        else{
          ///ehama nowe nam api balanna one 
          res.errors.forEach(element => {
            switch (element.code) {
              case 'DuplicateUserName':
                  //display duplicate user name
                break;
            
              default:
                //registration failed
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

  click(){
    console.log('pamal');
  }

}
