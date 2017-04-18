import { Component, EventEmitter, Input, OnChanges } from '@angular/core';
import { NgForm }    from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { PostarideComponent } from 'app/pages/postaride/postaride.component';
import { RideService } from 'app/services/ride.service';
import { EmitterService } from 'app/services/emitter.service';
import { Ride } from '../../models/ride';

@Component({
  templateUrl: `./searchresults.component.html`,

})

export class SearchResultsComponent { 
 
  closeResult: string;
  constructor(private modalService: NgbModal) {}

  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }


 }