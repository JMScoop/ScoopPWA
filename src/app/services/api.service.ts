import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Auth } from './auth.service';
import { environment as env } from '../../environments/environment';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class Api {

  private api_url: string;

  constructor(private auth: Auth, private http: Http) {
    this.api_url = env.api_url;
  }

  // create a function to get data from our API
  get(path: string = ""): Observable<any> {
    // is this person logged in?
    if(this.auth.authenticated()) {
      // get the JWT
      let token = localStorage.getItem('id_token');

      // set the Authorization and Content-Type headers
      let headers = new Headers();
      headers.set('Authorization', `Bearer ${token}`);

      // fetch the result
      return this.http.get(this.api_url + path, {headers: headers})
                      .map((res: Response): any => res.json())
                      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    } else {
      // NOT logged in
    }
  }
}