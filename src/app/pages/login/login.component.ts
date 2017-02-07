import { Component } from '@angular/core';
import { Auth } from 'app/services/auth.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
constructor(private auth: Auth
  	) {} }