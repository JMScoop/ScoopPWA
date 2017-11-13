import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { Ride } from '../../models/ride';
import { Person } from '../../models/person';
import { Car } from '../../models/car';
import 'rxjs/add/operator/map';

/*
  Generated class for the RideProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RideProvider {

  constructor() {
    console.log('Hello RideProvider Provider');
  }
  getRides(): Observable<Ride[]> {
    let rides: Ride[] = [];
    let colecar: Car = new Car(2, "Gray Honda Accord" );
    let cole: Person = new Person("Cole", "Gerhart", colecar);
    let coleride: Ride = new Ride(new Date(), "ISAT", "The Mill", "", 2, [], cole);
    rides.push(coleride);
    return Observable.of(rides);

  }
}
