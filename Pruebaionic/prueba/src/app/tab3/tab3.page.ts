import { Component, OnInit } from '@angular/core';
import{RoutineService} from '../routine.service';

import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { LoadingController } from '@ionic/angular';
import { createTokenForExternalReference } from '@angular/compiler/src/identifiers';

declare var google;

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})


export class Tab3Page implements OnInit {
  mapRef = null;
  tipo=this.creaF();


  rutinas
  constructor(public servicio:RoutineService,private geolocation: Geolocation,private nativeGeocoder: NativeGeocoder, private loadCtrl:LoadingController ){
    this.servicio.obtenerRutinas(this.tipo)
    .subscribe(
      (data)=>{this.rutinas=data;
      console.log("entro bien");},
      (error)=>{console.log("no funca bien esto");}
    )

  }

  public creaF(){
    var ti="Piernas";
    return ti;
  }

  ngOnInit() {
    this.loadMap();
  }

  async loadMap() {
    const loading = await this.loadCtrl.create();
    loading.present();
    const rta = await this.geolocation.getCurrentPosition();
    const myLatLng={
      lat:rta.coords.latitude,
      lng:rta.coords.longitude
    };
    console.log(myLatLng);
    const mapEle: HTMLElement = document.getElementById('map');
    this.mapRef = new google.maps.Map(mapEle,{
      center: myLatLng,
      zoom: 15
    });
    google.maps.event.addListenerOnce(this.mapRef,'idle', () => {
      console.log('listener para ver si identific que ya inicio');
      loading.dismiss();
      this.addMarker(myLatLng.lat, myLatLng.lng);

    });


  }
  private addMarker(lat: number, lng: number) {
    const marker = new google.maps.Marker({
      position:{
        lat,
        lng
      },
      zoom: 15,
      map: this.mapRef,
      title: 'Hola Carlangas'
    });

  }


}
