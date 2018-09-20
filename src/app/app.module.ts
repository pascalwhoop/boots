import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
// import {ToastController} from 'ionic-angular';
// import {AlertController} from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import {firebaseConfig} from "../environment";
import {AngularFirestoreModule} from "@angular/fire/firestore";
import { ImageUploadProvider } from '../providers/image-upload/image-upload';
import {AngularFireAuthModule} from "@angular/fire/auth";
import {SubmitteditemComponent} from "../components/submitteditem/submitteditem";
import {SubmittedlistComponent} from "../components/submittedlist/submittedlist";
import {SubmitboxComponent} from "../components/submitbox/submitbox";
import {CounterComponent} from "../components/counter/counter";
import {FeedbackPage} from "../pages/feedback/feedback";
// import {HttpModule} from "@angular/http";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    FeedbackPage,
    HomePage,
    SubmitboxComponent,
    CounterComponent,
    SubmittedlistComponent,
    SubmitteditemComponent,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    HttpClientModule,
    AngularFireAuthModule,
    AngularFirestoreModule,

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    FeedbackPage,
    SubmitboxComponent,
    CounterComponent,
    SubmittedlistComponent,
    SubmitteditemComponent,
    HomePage,
    TabsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ImageUploadProvider
  ]
})
export class AppModule {}
