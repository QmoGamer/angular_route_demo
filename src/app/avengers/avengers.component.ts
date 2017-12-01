import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';

@Component({
  selector: 'app-avengers',
  templateUrl: './avengers.component.html',
  styleUrls: ['./avengers.component.css']
})
export class AvengersComponent implements OnInit {
  heroes = [
    { id: 11, name: 'Captain America' },
    { id: 12, name: 'Iron Man' },
    { id: 13, name: 'Thor' },
    { id: 14, name: 'Loki' },
    { id: 15, name: 'Hulk' }
  ];

  constructor() { }

  ngOnInit() {

  }

}
