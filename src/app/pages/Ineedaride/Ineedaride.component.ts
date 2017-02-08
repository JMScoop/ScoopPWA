import { Component } from '@angular/core';


@Component({
  template: `

    <div class="row">
  <div class="col">
    <div ngbDropdown class="d-inline-block">
      <button class="btn btn-outline-primary" id="dropdownMenu1" ngbDropdownToggle>Times</button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenu1">
        <button class="dropdown-item">9:00</button>
        <button class="dropdown-item">9:05</button>
        <button class="dropdown-item">9:10</button>
      </div>
    </div>
  </div>
`

})

export class IneedarideComponent { 

}