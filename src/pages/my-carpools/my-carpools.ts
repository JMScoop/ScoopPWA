import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the MyCarpoolsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-carpools',
  templateUrl: 'my-carpools.html'
})
export class MyCarpoolsPage {

  drivingRoot = 'DrivingPage'
  ridingRoot = 'RidingPage'


  constructor(public navCtrl: NavController) {}

}
