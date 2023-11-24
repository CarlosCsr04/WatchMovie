import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

import { provideAuth, getAuth, GoogleAuthProvider, signInWithPopup } from '@angular/fire/auth';
import { provideStorage, getStorage } from '@angular/fire/storage';

//const firebaseConfig = {};

const firebaseConfig = {
  apiKey: "AIzaSyAXtXp5SMyPNMLEtUO39ow_hboQv7U5tOU",
  authDomain: "wm23-efff2.firebaseapp.com",
  projectId: "wm23-efff2",
  storageBucket: "wm23-efff2.appspot.com",
  messagingSenderId: "30574444552",
  appId: "1:30574444552:web:84d380c4cedf381cc391bd",
  measurementId: "G-QSHFZV37FZ"
};


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage())
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}