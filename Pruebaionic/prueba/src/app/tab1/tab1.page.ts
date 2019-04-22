import { Component } from '@angular/core';
import {GolpeService} from '../golpe.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',

  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
datos

constructor(public servicio: GolpeService){


}

obtener(){

  /*this.servicio.obtenerDatos().subscribe((data)=>{this.datos=data;
  console.log('valio');},
  (error)=>{console.log('no vale');})*/
}

}
