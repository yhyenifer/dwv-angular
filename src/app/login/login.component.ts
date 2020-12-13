import { ElementRef, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as anime from 'animejs';
import { ServiceService } from '../services/service.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('error', { static: true }) alert: ElementRef;
  userFocus: boolean;
  passFocus: boolean;
  usuario: any;
  pass: any;
  datos: import("c:/Users/Usuario/Documents/trabajo/catavento/especialistas/CDEDicom/src/app/services/service.service").login[];
  message: any;

  constructor(public serviceService: ServiceService, private router: Router) { }

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

  login(){    
    this.serviceService.login({usuario: this.usuario, contrasenia: this.pass})
    .subscribe(data =>{
      console.log(data);
      this.datos=data;
      if(!this.datos['success']){
        this.message = this.datos['message'];
        this.alert.nativeElement.classList.remove('hidden');
        setTimeout(() => {
          this.alert.nativeElement.classList.add('hidden');
        this.message = '';
        }, 4000);
      }else{
        window.sessionStorage.setItem('nombreMedico',this.datos['nombre']);
        //usuario
        //tipo
        this.router.navigate(['dwv']);
      }
    })
  }

}
