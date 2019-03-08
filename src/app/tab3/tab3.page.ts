import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
    registro(event,nombre){
      alert('Registrado')
      window.open('https://es.123rf.com/photo_80855189_bienvenido-bienvenido-en-espa%C3%B1ol-nube-de-palabras-en-diferentes-idiomas-trasfondo-conceptual.html')
    }
}
