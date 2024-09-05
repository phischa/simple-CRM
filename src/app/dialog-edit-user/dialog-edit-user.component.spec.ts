import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonModule } from '@angular/common';

import { DialogEditUserComponent } from './dialog-edit-user.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAnimations } from '@angular/platform-browser/animations';

describe('DialogEditUserComponent', () => {
  let component: DialogEditUserComponent;
  let fixture: ComponentFixture<DialogEditUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ DialogEditUserComponent, MatDialogModule, /* BrowserAnimationsModule */],
      providers: [
        provideAnimations(),
        provideFirebaseApp(() => initializeApp({"projectId":"simplecrm-962ff","appId":"1:602543558063:web:18a2274d53aca28a1cf35a","storageBucket":"simplecrm-962ff.appspot.com","apiKey":"AIzaSyCUC-LnqEljc2bSryrpAPanEXjtLC6NbgI","authDomain":"simplecrm-962ff.firebaseapp.com","messagingSenderId":"602543558063"})),
        provideFirestore(() => getFirestore()),
        {
          provide: MatDialogRef,
          useValue: {},
        }
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogEditUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
