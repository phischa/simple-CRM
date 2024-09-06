import { Component, inject, NgModule, HostListener } from '@angular/core';
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
  isWideScreen: boolean = true; 

  firestore: Firestore = inject(Firestore);

  constructor(public dialog: MatDialog, private router: Router) {
    this.users$ = collectionData(this.getUsersRef(), { idField: 'id' });
    this.users = this.users$.subscribe((changes: User []) => {
      this.allUsers = changes;
    });
  }

  getUsersRef() {
    return collection(this.firestore, 'users');
  }

  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkScreenSize(); // Check screen size on resize
  }

  checkScreenSize() {
    this.isWideScreen = window.innerWidth >= 500; 
  }

  /* navigateToUser(id: string) {
    this.router.navigate(['/user', alUsers.id]);
  } */
}
