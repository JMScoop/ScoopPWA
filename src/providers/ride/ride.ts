import { Injectable } from '@angular/core';
import { FeathersProvider } from '../feathers/feathers';
import { Observable } from 'rxjs/Observable';
import { Ride } from '../../models/ride';

@Injectable()
export class RideProvider {

  constructor(private feathers: FeathersProvider) {}

  getRides(query: any): Observable<Ride[]> {
  	return this.feathers.service('rides')
  			   .watch()
  			   .find({
  			   	 query: query
  			   });
  }
}
