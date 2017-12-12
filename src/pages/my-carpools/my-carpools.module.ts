import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyCarpoolsPage } from './my-carpools';

@NgModule({
  declarations: [
    MyCarpoolsPage,
  ],
  imports: [
    IonicPageModule.forChild(MyCarpoolsPage),
  ]
})
export class MyCarpoolsPageModule {}
