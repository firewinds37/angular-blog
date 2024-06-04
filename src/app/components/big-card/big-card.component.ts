import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [  CommonModule,
    RouterModule],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})



export class BigCardComponent implements OnInit{
  @Input()
  photoCover:string = ""
  @Input()
  cardTitle:string = ""
  @Input()
  cardDescription:string  = ""
  @Input()
  Id:string = "0"

  ngOnInit(): void {

  }

}
