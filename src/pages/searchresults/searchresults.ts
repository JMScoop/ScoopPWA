import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RideProvider } from '../../providers/ride/ride';
import { Ride } from '../../models/ride';
/**
 * Generated class for the SearchresultsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-searchresults',
  templateUrl: 'searchresults.html',
})
export class SearchresultsPage {

  public rides: Ride[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public rp: RideProvider) {
  }

  ionViewDidLoad() {
    this.rp.getRides().subscribe(
    	(r:Ride[]) => {
    		this.rides = r;
    	}
   	)
  }

}
