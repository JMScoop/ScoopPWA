import { Component, OnInit } from '@angular/core';
import { Ride } from '../../models/ride';
import { RideService } from '../../services/ride.service';

@Component({
  templateUrl: `./mycarpools.component.html`,
  styleUrls: ['./mycarpools.component.css']
})

export class MycarpoolsComponent implements OnInit {
  private rides: Ride[] = [];

  constructor(private api: RideService) {}

  ngOnInit() {
    this.api.getRides().subscribe((res: Ride[]) => {
      this.rides = res;
    });
  }
}