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

import { Firestore, collection, collectionData, addDoc, onSnapshot, updateDoc, doc } from '@angular/fire/firestore';
import { User } from '../../models/user.class';

@Component({
  selector: 'app-dialog-edit-user',
  standalone: true,
  imports: [CommonModule,
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
  templateUrl: './dialog-edit-user.component.html',
  styleUrl: './dialog-edit-user.component.scss'
})
export class DialogEditUserComponent {
  user: User = new User();
  loading: boolean = false;
  userId!: string;

  firestore: Firestore = inject(Firestore);

  constructor(public dialogRef: MatDialogRef<DialogEditUserComponent>) {

  }

  async saveUser() {
    this.loading = true;
    try {
      const userDocRef = doc(this.firestore, 'users', this.userId);
      const updateData = this.getUpdatedData();
      updateDoc(userDocRef, updateData);
    } catch (err) {
      console.error(err);
    } finally {
      this.loading = false;
      this.dialogRef.close();
    }
  }

  getUpdatedData() {
    return {
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      email: this.user.email
    };
  }
}
