import { Component } from '@angular/core';
import { SidenavComponent } from "./sidenav/sidenav.component";
import { SideNatToggle } from './models/sidenav_interface';
import { BodyComponent } from './body/body.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SidenavComponent, BodyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sidebar';

  isSideNavCollapsed = false;
  screenWidth = 0;

  onToggleSidenav(data: SideNatToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }
}
