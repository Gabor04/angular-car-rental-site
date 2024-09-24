import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { supportsPassiveEventListeners } from '@angular/cdk/platform';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor() { 
    const firebaseConfig = {
      apiKey: "AIzaSyC-x7DAOF07m4I1I_dQQ0BwMApBOxyoOCA",
      authDomain: "carrent-1bb8c.firebaseapp.com",
      projectId: "carrent-1bb8c",
      storageBucket: "carrent-1bb8c.appspot.com",
      messagingSenderId: "717086536258",
      appId: "1:717086536258:web:e36bef5324cfdb9739b3db",
      measurementId: "G-5JP2T8YJJ0"
    };
    const app = initializeApp(firebaseConfig);

    if(typeof window !== 'undefined'){
      isSupported().then((supported) => {
        if(supported){
          const analytics = getAnalytics(app);
          console.log('Firebase Analitycs initialized');
        }
        else{
          console.log('Firebase no');
        }
      });
    }


   
  }
}
