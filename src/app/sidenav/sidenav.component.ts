import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { navBarData } from './nav-data';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SideNatToggle } from '../models/sidenav_interface';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { animate, keyframes, style, transition, trigger } from '@angular/animations';



@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, FontAwesomeModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css',
  animations: [
    trigger("fadeInOut", [
      transition(":enter", [
        style({opacity: 0}),
        animate("350ms", style({opacity: 1}))
      ]),
      transition(":leave", [
        style({opacity: 1}),
        animate("350ms", style({opacity: 0}))
      ])
    ]),
    trigger("rotate", [
      transition(":enter" , [
        animate("500ms",
          keyframes([
            style({transform: "rotate(0deg)", offset: "0"}),
            style({transform: "rotate(2turn)", offset: "1"}),
      ])
        )
      ])
    ])
  ]
})
export class SidenavComponent implements OnInit{

  @HostListener("window:resize", ["$event"])
  onResize(event: any){
    this.screenWidth = window.innerWidth;
    if(this.screenWidth <= 768){
      this.collapsed = false;
      this.onToggleSidenav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth})

    }
  }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }
  @Output() onToggleSidenav: EventEmitter<SideNatToggle> = new EventEmitter();


  collapsed = true;
  screenWidth = 0;
  navData = navBarData;

  faClose = faClose

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSidenav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth})
  };

  closeSidenav(): void {
    this.collapsed = false;
    this.onToggleSidenav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth})

  }
}
