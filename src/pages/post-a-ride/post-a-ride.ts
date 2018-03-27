import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup, ValidatorFn, AbstractControl } from '@angular/forms';
import * as moment from 'moment';

import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { RideProvider } from '../../providers/ride/ride';
import { MyCarpoolsPage } from '../my-carpools/my-carpools';

interface RidePost {
  depart_date: string;
  depart_time: string;
}

@IonicPage()
@Component({
  selector: 'page-post-a-ride',
  templateUrl: 'post-a-ride.html',
})
export class PostARidePage {

// export class Ride {
//   constructor (
//     public departs: Date,
//     public origin: string = "",
//     public destination: string = "",
//     public notes: string = "",
//     public seats_open: number = 3,
//     public passengers: Person[],
//     public driver: Person
//   ){}

  private today: moment.Moment = moment();

  private ride: RidePost = {
    depart_date: this.today.format('Y-MM-DD'),
    depart_time: this.today.format('h:mm a')
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private fb: FormBuilder,
    private rideProvider: RideProvider
  ) {
    // this.ride = fb.group({
    //   departs: [ new Date(), [ Validators.required, this.departureDateValidator ] ]
    // });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostARidePage');
  }

  // departureDateValidator(): ValidatorFn {
  //   return (control: AbstractControl): { [key: string]: any } => {
  //     // set comparison value as last night at midnight
  //     const midnightLastNight = new Date();
  //     midnightLastNight.setHours(0, 0, 0, 0);

  //     // create a useful error object
  //     const departureDateError = {
  //       invalidDepartureDate: {
  //         value: control.value,
  //         message: "Departure date must be in the future"
  //       }
  //     };

  //     // check to see that 'departs' is AFTER last night at midnight
  //     return control.value < midnightLastNight ? departureDateError : null;
  //   };
  // }

  postRide() {
    console.log(this.ride);
    // process all of our values, e.g. combine depart_date + depart_time
    const departs = new Date(this.ride.depart_date + this.ride.depart_time);
    let newRide = new Ride(
      departs,
      "Festival",
      "Stonegate",
      "",
      3,
      [],
      new Person("Morgan", "Benton", new Car(3, ""))
    );
    this.rideProvider.postRide(newRide).subscribe(
      (res: any) => {
        // result from calling postRide comes back and
        if (err) {
          // handle the error
        }
        // otherwise
        // navigate to the next page... my-carpools?
        this.navCtrl.push(MyCarpoolsPage);
      }
    );
  }

}
