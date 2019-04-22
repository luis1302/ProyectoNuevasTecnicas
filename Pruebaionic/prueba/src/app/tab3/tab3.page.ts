import { Component } from '@angular/core';
import{RoutineService} from '../routine.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  rutinas
  constructor(public servicio:RoutineService ){
    this.servicio.obtenerRutinas()
    .subscribe(
      (data)=>{this.rutinas=data;
      console.log("entro bien");},
      (error)=>{console.log("no funca bien esto");}
    )
  }



}
