import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
constructor(private navCtrl: NavController){
}

routingViaNavParams(event){
  this.navCtrl.navigateForward('/tabs/tab3');
}

}
