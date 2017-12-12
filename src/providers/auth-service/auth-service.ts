import { Injectable } from '@angular/core';
// import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import * as auth0 from 'auth0-js';
// import { HomePage } from '../../pages/home/home';
// import { ProfilePage } from '../../pages/profile/profile';

@Injectable()
export class AuthServiceProvider {

  private auth0 = new auth0.WebAuth({
    clientID: 'TOHt37bTNqIXTo7SdgwPG0pPhkvnyKOq',
    domain: 'jmscoop.auth0.com',
    responseType: 'token id_token',
    audience: 'https://jmscoop.auth0.com/userinfo',
    redirectUri: 'http://localhost:8100/callback',
    scope: 'openid'
  });

  constructor(
    // public navCtrl: NavController,
    public storage: Storage
  ) {}

  public login(): void {
    this.auth0.authorize();
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.setSession(authResult);
        // this.navCtrl.push(ProfilePage);
      } else if (err) {
        // this.navCtrl.push(HomePage);
        console.log(err);
      }
    });
  }

  private setSession(authResult): void {
    // Set the time that the access token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    this.storage.set('access_token', authResult.accessToken);
    this.storage.set('id_token', authResult.idToken);
    this.storage.set('expires_at', expiresAt);
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    this.storage.remove('access_token');
    this.storage.remove('id_token');
    this.storage.remove('expires_at');
    // Go back to the home route
    // this.navCtrl.push(HomePage);
  }

  public isAuthenticated(): Promise<boolean> {
    // Check whether the current time is past the
    // access token's expiry time
    return this.storage.get('expires_at').then(
      (expiry: number) => {
        return new Date().getTime() < expiry;
      }
    )
  }
}
