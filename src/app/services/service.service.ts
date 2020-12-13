import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface login {
  usuario: string,
  nombre: string,
  tipo: string
}

/**
* @Injectable CartoonService
* @description servicio las historietas
* @author Yenifer Hernandez
* @date 08/11/2020
*/
@Injectable()
export class ServiceService{
  public url: string;
  urlBase: string;


  constructor(private http: HttpClient){ 
    // url para uso productivo
    this.urlBase = 'http://cdedicom.bhxq-tl6g.accessdomain.com/api/';
    // url para uso de proxy local
    //this.urlBase = 'api';
 
  }
/**
 * @function login()
 * @description funcion para lanzar la peticion de consulta de historitas
 * @param number numero de historieta a ser consultada
 * @author Yenifer Hernandez
 * @date 08/11/2020
 */ 
login(obj_login):Observable<login[]>{
  console.log(obj_login);
    this.url = this.urlBase+'login.php';
    let datos: FormData = new FormData();
    datos.append('usuario', obj_login.usuario);
    datos.append('contrasenia', obj_login.contrasenia);

    return this.http.post<login[]>(this.url, datos);
  }

}