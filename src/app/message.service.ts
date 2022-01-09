import { Injectable } from '@angular/core';
import { OthermessageService } from './othermessage.service';

// @Injectable({
//   providedIn: 'root'
// })
 @Injectable()
export class MessageService {
  othersmg:string="";

  constructor(private _othermessageService:OthermessageService) { }


getmessage(){
  return "Hello Rudraksh Datta";
}
getothersmg(){
  this.othersmg=this._othermessageService.getothermessage();
  return this.othersmg;
}
}
