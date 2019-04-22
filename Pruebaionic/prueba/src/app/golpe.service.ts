import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GolpeService {

  constructor( private http:HttpClient) {


  console.log('si vale esto'); }

  obtenerDatos(){

    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }
}
