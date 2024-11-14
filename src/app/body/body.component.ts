import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent implements OnInit{
  constructor(){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
