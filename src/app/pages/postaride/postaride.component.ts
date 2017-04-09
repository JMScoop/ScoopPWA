import { Component, EventEmitter, Input, OnChanges } from '@angular/core';
import { NgForm }    from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import { RideService } from 'app/services/ride.service';
import { EmitterService } from 'app/services/emitter.service';
import { Ride } from '../../models/ride';
import { Passengers } from '../../models/ride';
import { Driver } from '../../models/ride';
import { Car } from '../../models/ride';

// const now = new Date();

@Component({
  templateUrl: `./postaride.component.html`,
  styleUrls: ['./postaride.component.css'],
  providers: [RideService]
})

export class PostarideComponent implements OnChanges{ 


   constructor(
        private rideService: RideService
        ){}
    // Local properties
    private model = new Ride(new Date(), '', '', '', Number(), new Passengers('',''), new Driver('','', new Car(Number(), '')));
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
                                    this.model = new Ride(new Date(), '', '', '', Number(), new Passengers('',''), new Driver('','', new Car(Number(), '')));
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

    
//   model: NgbDateStruct;
//   date: {year: number, month: number};

//   selectToday() {
//     this.model = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()}
// }

//   time = {hour: 13, minute: 30};
//   meridian = true;


//   toggleMeridian() {
//       this.meridian = !this.meridian;
//   }



}