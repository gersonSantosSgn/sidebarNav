import { MatIconModule } from '@angular/material/icon';
import { Component, EventEmitter, Output, output } from '@angular/core';
import { navBarData } from './nav-data';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface SideNatToggle {
  screenWidth: number;
  collapsed: boolean;
}


@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [CommonModule, RouterLink, MatIconModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {
  @Output() onToggleSidenav: EventEmitter<SideNatToggle> = new EventEmitter();
  
  collapsed = true;
  screenWidth = 0;
  navData = navBarData;


  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSidenav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth})
  };

  closeSidenav(): void {
    this.collapsed = false;
    this.onToggleSidenav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth})

  }
}
