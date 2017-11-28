import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BibliothèquePage } from './bibliothèque';

@NgModule({
  declarations: [
    BibliothèquePage,
  ],
  imports: [
    IonicPageModule.forChild(BibliothèquePage),
  ],
})
export class BibliothèquePageModule {}
