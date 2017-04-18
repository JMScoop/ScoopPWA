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