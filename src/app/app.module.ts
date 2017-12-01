import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';


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
import {Tab1Page} from '../pages/tab1/tab1';
import {Tab2Page} from '../pages/tab2/tab2';
import {Tab3Page} from '../pages/tab3/tab3';
import {TabsPage} from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CoursPage,
    AgendaPage,
    BibliothèquePage,
    EvènementsPage,
    Tab1Page,
    Tab2Page,
    Tab3Page,
    TabsPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    CoursPage,
    AgendaPage,
    BibliothèquePage,
    EvènementsPage,
    Tab1Page,
    Tab2Page,
    Tab3Page,
    TabsPage
   ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
