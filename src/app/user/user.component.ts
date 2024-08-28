import { Component, inject, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router'; 

import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { MatCardModule } from '@angular/material/card';

import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { User } from '../../models/user.class';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [ RouterModule, CommonModule, MatButtonModule, MatDividerModule, MatIconModule, MatTooltipModule, MatCardModule ],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'] // Corrected from styleUrl to styleUrls
})
export class UserComponent {
  users;
  users$: any;
  allUsers: User [] = [];

  firestore: Firestore = inject(Firestore);

  constructor(public dialog: MatDialog, private router: Router) {
    this.users$ = collectionData(this.getUsersRef(), { idField: 'id' });
    this.users = this.users$.subscribe((changes: User []) => {
      console.log('Received changes from DB', changes);
      this.allUsers = changes;
    });
  }

  getUsersRef() {
    return collection(this.firestore, 'users');
  }

  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  }

  /* navigateToUser(id: string) {
    this.router.navigate(['/user', alUsers.id]);
  } */
}
