import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';
import { Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, RequestOptions } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { provideAuth, AuthHttp, AuthConfig } from 'angular2-jwt';

import { AppComponent } from './app.component';
import { IneedarideComponent }  from './pages/Ineedaride/Ineedaride.component';

import { Auth } from './services/auth.service';

// import { AUTH_PROVIDERS }      from 'angular2-jwt';

// import { routing, appRoutingProviders } from './app.routes';

// import { HomeComponent }       from './home.component';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp( new AuthConfig({}), http, options);
}

@NgModule({
  declarations: [
    AppComponent,
    IneedarideComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: AppComponent},
      { path: 'ineedaride', component: IneedarideComponent },
    ])
  ],
  providers: [    
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [ Http, RequestOptions ]
    }, 
    Auth
     /*AUTH_PROVIDERS*/],
  bootstrap: [AppComponent]
})
export class AppModule { }
