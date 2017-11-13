import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { SearchresultsPage } from '../searchresults/searchresults';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  onLoadSearchResults() {
  	this.navCtrl.push(SearchresultsPage);
  }

}
