import { Component } from '@angular/core';


@Component({
  template: `

    <div class="btn-group" dropdown>
  		<button id="single-button" type="button" class="btn btn-primary" dropdownToggle>
    		Time <span class="caret"></span>
  		</button>
  		<ul dropdownMenu role="menu" aria-labelledby="single-button">
    		<li role="menuitem"><a class="dropdown-item" href="#">9:00</a></li>
    		<li role="menuitem"><a class="dropdown-item" href="#">9:05</a></li>
    		<li role="menuitem"><a class="dropdown-item" href="#">9:10</a></li>
    		<li role="menuitem"><a class="dropdown-item" href="#">9:15</a></li>
    		<li role="menuitem"><a class="dropdown-item" href="#">9:20</a></li>
    		<li role="menuitem"><a class="dropdown-item" href="#">9:25</a></li>
  		</ul>
	</div><br>

 <div class="btn-group" dropdown>
  <button id="single-button" type="button" class="btn btn-primary" dropdownToggle>
    Leaving from <span class="caret"></span>
  </button>
  <ul dropdownMenu role="menu" aria-labelledby="single-button">
    <li role="menuitem"><a class="dropdown-item" href="#">Sunchase</a></li>
    <li role="menuitem"><a class="dropdown-item" href="#">Copper</a></li>
    <li role="menuitem"><a class="dropdown-item" href="#">Stonegate</a></li>
    <li role="menuitem"><a class="dropdown-item" href="#">Charelston</a></li>
  </ul>
</div><br>

 <div class="btn-group" dropdown>
  <button id="single-button" type="button" class="btn btn-primary" dropdownToggle>
    Going to <span class="caret"></span>
  </button>
  <ul dropdownMenu role="menu" aria-labelledby="single-button">
    <li role="menuitem"><a class="dropdown-item" href="#">Festival</a></li>
    <li role="menuitem"><a class="dropdown-item" href="#">Mason deck</a></li>
    <li role="menuitem"><a class="dropdown-item" href="#">Baseball lot</a></li>
  </ul>
</div><br>

<pre class="card card-block card-header">{{singleModel}}</pre>
<button type="button" class="btn btn-primary"
        [(ngModel)]="singleModel" btnCheckbox
        btnCheckboxTrue="1" btnCheckboxFalse="0">
  Submit
</button>

`

})

export class IneedarideComponent { 

}