import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';

import { ActivatedRoute } from '@angular/router';

import { Firestore, doc, docData } from '@angular/fire/firestore';
import { User } from '../../models/user.class';
import { MatDialog } from '@angular/material/dialog';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';
import { DialogEditAddressComponent } from '../dialog-edit-address/dialog-edit-address.component';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule, MatDividerModule, MatMenuModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent {
  user: User = new User();
  users$: any;
  UserId: string = '';

  firestore: Firestore = inject(Firestore);


  constructor(
    public dialog: MatDialog, 
    private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.UserId = params.get('id')!;
      console.log('User ID', this.UserId);
      this.getUser();
    });
  };

  getUser() {
    const userDocRef = doc(this.firestore, 'users', this.UserId); 
    docData(userDocRef).subscribe((user: any) => {
      this.user = new User(user);
      console.log('Received user data from DB', this.user);
    });
  }

  editUser() {
    const dialog = this.dialog.open(DialogEditUserComponent);
    dialog.componentInstance.user = this.user;
  }

  editAddress() {
    const dialog = this.dialog.open(DialogEditAddressComponent);
    dialog.componentInstance.user = this.user;
  }
}




