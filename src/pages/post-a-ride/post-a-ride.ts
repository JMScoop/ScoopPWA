import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup, ValidatorFn, AbstractControl } from '@angular/forms';
import { Storage } from '@ionic/storage';
import * as moment from 'moment';
import { Car } from '../../models/car'
import { Ride, locations } from '../../models/ride'
import { Person } from '../../models/person'
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { RideProvider } from '../../providers/ride/ride';
import { MyCarpoolsPage } from '../my-carpools/my-carpools';

interface RidePost {
  depart_date: string;
  depart_time: string;
  leaving_from?: string;
  going_to?: string;
  seats_available?: number;
  notes?: string;
}

@IonicPage()
@Component({
  selector: 'page-post-a-ride',
  templateUrl: 'post-a-ride.html',
})
export class PostARidePage {

  private today: moment.Moment = moment();
  private locs = locations;
  private car: Car = new Car(4, "Light Blue Honda CRV");
  private user: any;

  // show or hide error message flags
  private showLeavingFromError: boolean = false;


  private ride: RidePost = {
    depart_date: this.today.format('Y-MM-DD'),
    depart_time: this.today.format('h:mm a'),
    seats_available: 3
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private fb: FormBuilder,
    private rideProvider: RideProvider,
    private storage: Storage
  ) {
  }

  ionViewDidLoad() {
    // get the number of seats in the car
    // of the currently logged-in user and
    // use it to set this.ride.seats_available
    //
    // this.ride.seats_available = this.user.car.seats;
    this.storage.get('user').then(
      (profile: any) => {
        this.user = profile;
        console.log(this.user);
      }
    );
  }

  postRide() {
    console.log(this.ride);
    // process all of our values, e.g. combine depart_date + depart_time

    // check our datetime values
    const now = new Date();
    const departs = new Date(`${this.ride.depart_date} ${this.ride.depart_time}`);
    // is the departure in the future?
    if (departs < now) {
      // uh-oh, the departure time is in the past!!!
    }

    // handle if either location is not set
    if (!this.ride.leaving_from || "" === this.ride.leaving_from) {
      // uh-oh!
      this.showLeavingFromError = true;
      console.log(this.showLeavingFromError);
      return;
    }
    if ("" === this.ride.going_to) {
      // uh-oh!
    }

    let car = new Car( this.user.user_metadata.car.seats, this.user.user_metadata.car.description );
    let person = new Person(
      this.user.user_id, 
      this.user.user_metadata.first_name, 
      this.user.user_metadata.last_name,
      car 
    );

    // create a new ride object
    let newRide = new Ride(
      person,
      departs,
      this.ride.leaving_from,
      this.ride.going_to,
      this.ride.seats_available,
      this.ride.notes,
      []
    );
    this.rideProvider.postRide(newRide).then(
      (res: any) => {
        // result from calling postRide comes back and
        // if (Error) {
        //   // handle the error
        // }
        // otherwise
        // navigate to the next page... my-carpools?
        this.navCtrl.push(MyCarpoolsPage);
        //console.log(res);
      },
      (err: any) => {
        console.log("ERROR: ", err);
      }
    );
  }

}
