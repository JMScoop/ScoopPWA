import { Component, EventEmitter, Input, OnChanges } from '@angular/core';
import { NgForm }    from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'angular2-select';
import { Observable } from 'rxjs/Rx';
import { RideService } from 'app/services/ride.service';
import { EmitterService } from 'app/services/emitter.service';
import { Ride } from '../../models/ride';
import { Passengers } from '../../models/ride';
import { Driver } from '../../models/ride';
import { Car } from '../../models/ride';


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
    private depart_date: any;
    private depart_time: any;

    //locations
    public locations = [
    { value: 'Sunchase Apartments', display: 'Sunchase Apartments' },
    { value: 'Charleston Townes', display: 'Charleston Townes' },
    { value: 'Copper Beech', display: 'Copper Beech' },
    { value: 'The Hills: Stonegate', display: 'The Hills: Stonegate'},
    { value: 'The Hills: Southvie', display: 'The Hills: Southview'},
    { value: 'The Hills: Northview', display: 'The Hills: Northview'},
    { value: 'The Harrison', display: 'The Harrison'},
    { value: 'Forest Hills Manor LLC', display: 'Forest Hills Manor LLC'},
    { value: 'Forest Hills LLC', display: 'Forest Hills LLC'},
    { value: 'Urban Exchange', display: 'Urban Exchange'},
    { value: 'Downtown', display: 'Downtown'},
    { value: 'Pheasant Run', display: 'Pheasant Run'},
    { value: 'Aspen Heights', display: 'Aspen Heights'},
    { value: 'Foxhill Townes', display: 'Foxhill Townes'},
    { value: '865', display: '865'},
    { value: 'Hunters Ridge', display: 'Hunters Ridge'},
    { value: 'North 38', display: 'North 38'},
    { value: 'The Mill', display: 'The Mill'},
    { value: 'Campus View Apartments', display: 'Campus View Apartments'},
    { value: 'The Retreat', display: 'The Retreat'},
    { value: 'Squire Hill', display: 'Squire Hill'},
    { value: 'Campus: The Quad', display: 'Campus: The Quad'},
    { value: 'Campus: Lakeside', display: 'Campus: Lakeside'},
    { value: 'Campus: East Campus', display: 'Campus: East Campus'},
    { value: 'Campus: Memorial Hall', display: 'Campus: Memorial Hall'}
    ];
    
 
    // Input properties
     @Input() editId: string;
     @Input() listId: string;

    submitRide(){
        // Variable to hold a reference of addRide/updateRide
        let rideOperation:Observable<Ride[]>;

        console.log(this.depart_date);
        console.log(this.depart_time);
        this.model.departs = new Date(this.depart_date + 'T' + this.depart_time);
        console.log(this.model);
        // return;

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


}