import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[AuthenticationService]
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
 




  constructor(private route:Router, private fb:FormBuilder, private userlogin:AuthenticationService) {
 
   }

  ngOnInit(): void {

    this.buildLoginForm();
  

  }

  buildLoginForm(){
    this.loginForm = this.fb.group({
      email :['', Validators.required],
      password:['',Validators.required]
    })
  }

  login(){
debugger;
    if(this.loginForm.invalid){
      alert("Please fill your form")
    }else{
      let mail = this.loginForm.value.email;
      let pwd = this.loginForm.value.password;


    const loginObj={
      "email": mail,
      "password": pwd

    }
    console.log(loginObj);
    this.userlogin.loginUser(loginObj).subscribe(output=>{
      console.log(output);
       sessionStorage.setItem("token",output.token);
       sessionStorage.setItem("token",output.name);
       this.route.navigate(['/home'])
      
    })
    }
   
  }

  navigate(){
    this.route.navigate(['/']) }
}
