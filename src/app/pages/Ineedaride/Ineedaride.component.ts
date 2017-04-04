import { Component } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Api } from '../../services/api.service';
import { Ride } from '../../models/ride';

const now = new Date();

@Component({
  templateUrl: `./Ineedaride.component.html`,
  styleUrls: ['./Ineedaride.component.css']

})

export class IneedarideComponent {

  public isCollapsed = false;
  public rides: Ride[] = [];

  constructor(private api: Api) {
    this.api.get('rides').subscribe(res => {
      this.rides = res.rides;
      console.log(this.rides);
    });
  }

  model: NgbDateStruct;
  date: {year: number, month: number};

  selectToday() {
    this.model = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
  }

  time = {hour: 13, minute: 30};
  meridian = true;

  time1 = {hour: 13, minute: 30};
  meridian1 = true;

  toggleMeridian() {
      this.meridian = !this.meridian;
      this.meridian1 = !this.meridian1;
  }

}