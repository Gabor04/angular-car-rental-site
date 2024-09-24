/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { AppComponent } from './app/app.component';
import { ApplicationConfig } from '@angular/core';


const firebaseConfig = {
  apiKey: 'AIzaSyC-x7DAOF07m4I1I_dQQ0BwMApBOxyoOCA',
  authDomain: 'carrent-1bb8c.firebaseapp.com',
  projectId: 'carrent-1bb8c',
  storageBucket: 'carrent-1bb8c.appspot.com',
  messagingSenderId: '717086536258',
  appId: '1:717086536258:web:e36bef5324cfdb9739b3db',
  measurementId: 'G-5JP2T8YJJ0',
};


 bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
