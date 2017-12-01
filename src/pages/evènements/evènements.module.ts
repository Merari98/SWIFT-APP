import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EvènementsPage } from './evènements';

@NgModule({
  declarations: [
    EvènementsPage,
  ],
  imports: [
    IonicPageModule.forChild(EvènementsPage),
  ],
})
export class EvènementsPageModule {}
