import { Component } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

const now = new Date();

@Component({
  templateUrl: `./Ineedaride.component.html`

})

export class IneedarideComponent { 

public isCollapsed = false;

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