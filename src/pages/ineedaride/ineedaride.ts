import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the IneedaridePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ineedaride',
  templateUrl: 'ineedaride.html',
})
export class IneedaridePage {
	 comingFrom: string;
	 goingTo: string;

	 public buttonClicked: boolean = false; //Whatever you want to initialise it as

    public onButtonClick() {

        this.buttonClicked = !this.buttonClicked;
    }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  stpSelect() {
    console.log('STP selected');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IneedaridePage');
  }

}
