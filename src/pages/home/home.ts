import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { SearchresultsPage } from '../searchresults/searchresults';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public auth: AuthServiceProvider
  ) {

  }

  onLoadSearchResults() {
  	this.navCtrl.push(SearchresultsPage);
  }

}
