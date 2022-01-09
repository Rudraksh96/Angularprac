import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers:[AuthenticationService]
})
export class SignupComponent implements OnInit {
  signupForm:FormGroup;

  constructor(private route:Router, private fb:FormBuilder, private signUp:AuthenticationService) { }

  ngOnInit(): void {
    this.buildsignupForm();
  }
  buildsignupForm(){
    this.signupForm = this.fb.group({
      name :['', Validators.required],
       email :['', Validators.required],
      password:['',Validators.required],
       age :['', Validators.required]
    })
  }
  signup()
  {
    if(this.signupForm.invalid){
      alert("Please fill your form")
    }else{
     
      let name = this.signupForm.value.name;
      let email = this.signupForm.value.email;
      let password = this.signupForm.value.password;
      let age = this.signupForm.value.age;

      const userObj = {
        "name": name,
        "email": email,
        "password": password,
        "age": age
      }

      console.log(userObj);
      this.signUp.registerUser(userObj).subscribe(data=>{
        console.log(data, "signup response");

       

        this.route.navigate(['/login'])
      } )
    }
   
  }


  navigate(){
    this.route.navigate(['/login'])
  }
    
  }


