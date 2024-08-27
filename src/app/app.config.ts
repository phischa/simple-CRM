import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(), provideFirebaseApp(() => initializeApp({"projectId":"simplecrm-962ff","appId":"1:602543558063:web:18a2274d53aca28a1cf35a","storageBucket":"simplecrm-962ff.appspot.com","apiKey":"AIzaSyCUC-LnqEljc2bSryrpAPanEXjtLC6NbgI","authDomain":"simplecrm-962ff.firebaseapp.com","messagingSenderId":"602543558063"})), provideFirestore(() => getFirestore())]
};
