import { Component, EventEmitter, Input, OnChanges } from '@angular/core';
import { NgForm }    from '@angular/forms';
import { Observable } from 'rxjs/Rx';

import { PostarideComponent } from 'app/pages/postaride/postaride.component';
import { RideService } from 'app/services/ride.service';
import { EmitterService } from 'app/services/emitter.service';
import { Ride } from '../../models/ride';

@Component({
  templateUrl: `./ride.component.html`,
  providers: [RideService]
})

export class RideComponent implements OnChanges { 


  
  constructor(
        private rideService: RideService
        ){}
    // Local properties
    private model = new Ride(new Date(), '', '');
    private editing = false;

    // Input properties
     @Input() editId: string;
     @Input() listId: string;

    submitRide(){
        // Variable to hold a reference of addRide/updateRide
        let rideOperation:Observable<Ride[]>;

        if(!this.editing){
            // Create a new comment
            rideOperation = this.rideService.addRide(this.model)
        } else {
            // Update an existing comment
             rideOperation = this.rideService.updateRide(this.model)
        }

        // Subscribe to observable
        rideOperation.subscribe(
                                rides => {
                                    // Emit list event
                                    EmitterService.get(this.listId).emit(rides);
                                    // Empty model
                                    this.model = new Ride(new Date(), '', '');
                                    // Switch editing status
                                    if(this.editing) this.editing = !this.editing;
                                }, 
                                err => {
                                    // Log errors if any
                                    console.log(err);
                                });
    }

    ngOnChanges() {
        // Listen to the 'edit'emitted event so as populate the model
        // with the event payload
        EmitterService.get(this.editId).subscribe((ride:Ride) => {
            this.model = ride
            this.editing = true;
        });
    }
 }