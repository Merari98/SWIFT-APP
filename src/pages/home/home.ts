import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import moment from 'moment';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public data = null;
  constructor(public navCtrl: NavController) {
    let data = moment().format('dddd Do MMMM ');                                                                                  
    this.data= moment().format('dddd Do MMMM ');
    console.log('today is: ', data );                                                                                                                                                                                                                                                                                                                                                                              
  }

}
