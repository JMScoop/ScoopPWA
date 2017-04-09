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

export class RideComponent { 


 }