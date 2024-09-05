import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserComponent],
      providers: [
        provideFirebaseApp(() => initializeApp({"projectId":"simplecrm-962ff","appId":"1:602543558063:web:18a2274d53aca28a1cf35a","storageBucket":"simplecrm-962ff.appspot.com","apiKey":"AIzaSyCUC-LnqEljc2bSryrpAPanEXjtLC6NbgI","authDomain":"simplecrm-962ff.firebaseapp.com","messagingSenderId":"602543558063"})),
        provideFirestore(() => getFirestore()),
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
