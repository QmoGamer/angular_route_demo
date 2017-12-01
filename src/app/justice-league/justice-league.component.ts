import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-justice-league',
  templateUrl: './justice-league.component.html',
  styleUrls: ['./justice-league.component.css']
})
export class JusticeLeagueComponent implements OnInit {
  heroes = [
    { id: 21, name: 'Batman' },
    { id: 22, name: 'Superman' },
    { id: 23, name: 'Wonder Woman' },
    { id: 24, name: 'The Flash' },
    { id: 25, name: 'Aquaman' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
