import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RoutineService {
  rutinas:any;
 

  constructor(public http:HttpClient) {
    console.log("hola si vale y entra al service")
  }

  obtenerRutinas(tipo){
    
    console.log("entra a la pagina");
    return this.http.get('http://127.0.0.1:8000/api/rutinas/'+tipo);
    console.log("entra a la pagina");
  }
}