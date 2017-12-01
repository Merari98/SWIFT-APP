import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { NgCalendarModule  } from 'ionic2-calendar';


//Pages
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { CoursPage } from '../pages/cours/cours';
import { AgendaPage } from '../pages/agenda/agenda';
import { BibliothèquePage } from '../pages/bibliothèque/bibliothèque';
import { EvènementsPage } from '../pages/evènements/evènements';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FIREBASE_CONFIG } from './firebase.credentials';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CoursPage,
    AgendaPage,
    BibliothèquePage,
    EvènementsPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule,
    NgCalendarModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    CoursPage,
    AgendaPage,
    BibliothèquePage,
    EvènementsPage
   ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
