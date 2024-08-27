import { Component, inject, NgModule,} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, DateAdapter, NativeDateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { Firestore, collection, collectionData, addDoc, onSnapshot } from '@angular/fire/firestore';
import { User } from '../../models/user.class';

export const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressBarModule,
  ],
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss'],
  providers: [
    { provide: DateAdapter, useClass: NativeDateAdapter },
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }, // Provide the date formats
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' } // Set the locale if needed
  ]
})
export class DialogAddUserComponent {
  user = new User();
  users: any;
  users$: any;
  birthDate!: Date;
  loading: boolean;

  firestore: Firestore = inject(Firestore);

  constructor(private dialogRef: MatDialogRef<DialogAddUserComponent>) {
    this.loading = false;
    this.users$ = collectionData(this.getUsersRef())
    this.users = this.users$.subscribe((user: any) => {
      console.log('user update', user);
    });
  }

  getUsersRef() {
    return collection(this.firestore, 'users');
  }

  async saveUser() {
    this.user.birthDate = this.birthDate.getTime();
    console.log('Current user is: ', this.user);
    this.loading = true;
    try {
      await addDoc(this.getUsersRef(), this.user.toJSON());
    } catch (err) {
      console.error(err);
    } finally {
      this.loading = false;
      this.dialogRef.close();
    }
  }

  closeCard() {
    this.dialogRef.close();
  }
}

