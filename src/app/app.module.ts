import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';
import { Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, RequestOptions, JsonpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { provideAuth, AuthHttp, AuthConfig } from 'angular2-jwt';
// import { BootstrapFormGeneratorModule } from 'ng-bootstrap-form-generator';


import { AppComponent } from './app.component';
import { IneedarideComponent }  from './pages/Ineedaride/Ineedaride.component';
import { MycarpoolsComponent } from './pages/mycarpools/mycarpools.component';
import { PostarideComponent } from './pages/Postaride/postaride.component';
import { RideComponent } from './pages/ride/ride.component';

import { Auth } from './services/auth.service';
import { Api  } from './services/api.service';
import { RideService } from './services/ride.service';
import { EmitterService } from './services/emitter.service';
 
// import { AUTH_PROVIDERS }      from 'angular2-jwt';

// import { routing, appRoutingProviders } from './app.routes';

// import { HomeComponent }       from './home.component';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp( new AuthConfig({}), http, options);
}

@NgModule({
  declarations: [
    AppComponent,
    IneedarideComponent,
    MycarpoolsComponent,
    PostarideComponent,
    RideComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // BootstrapFormGeneratorModule,
    HttpModule,
    JsonpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      { path: 'ineedaride', component: IneedarideComponent },
      { path: 'mycarpools', component: MycarpoolsComponent },
      { path: 'postaride', component: PostarideComponent },
      { path: 'ride', component: RideComponent },
    ]),
  ],
  providers: [
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [ Http, RequestOptions ]
    },
    Auth,
    Api,
    EmitterService,
    RideService
     /*AUTH_PROVIDERS*/],
  bootstrap: [AppComponent]
})
export class AppModule { }
