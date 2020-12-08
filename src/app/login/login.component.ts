import { Component, OnInit } from '@angular/core';
import * as anime from 'animejs';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userFocus: boolean;
  passFocus: boolean;

  constructor() { }

  ngOnInit(): void {
    this.userFocus = true;
    this.passFocus = false;

 

  }

  onFocusEvent(foco): void{
    if(foco ==='user'){
      this.userFocus = true;
      this.passFocus = false;
    } 
    if(foco ==='pass'){
      this.userFocus = false;
      this.passFocus = true;
    } 
  }

}
