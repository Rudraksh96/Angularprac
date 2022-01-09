import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  // providers:[MessageService]
})
  
export class HomeComponent  {
  title ='Rudraksh Datta';
  passengers:any;
 
  constructor(private _messagService: MessageService, private emp:EmployeeService) {

   }

  ngOnInit()
   {
     this.getPassengerList() // Isme sirf function ka name likh skhte hai 
    
   }

   getPassengerList(){
     this.emp.getEmployees().subscribe(res=>{ // is response me api se data aa rha hai //
       console.log(res.data,"Api response");
       this.passengers = res.data;

     })

   }
}


