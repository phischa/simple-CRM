import { Component, HostListener  } from '@angular/core';
import { NgIf } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [ NgIf, RouterOutlet, RouterLink, MatSidenavModule, MatButtonModule, MatToolbarModule, MatIconModule ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  showFiller = false;
  drawerOpened: boolean = true;
  private readonly breakpoint: number = 1000; 

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.updateDrawerState();
  }

  ngOnInit() {
    this.updateDrawerState();
  }

  private updateDrawerState() {
    this.drawerOpened = window.innerWidth >= this.breakpoint;
  }
}

