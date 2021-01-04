import { Component, OnInit } from '@angular/core';
import { rouletteLogList } from './bet-counter-item/bet-counter-items-list';
@Component({
  selector: 'app-bet-counter',
  templateUrl: './bet-counter.component.html',
  styleUrls: ['./bet-counter.component.scss']
})
export class BetCounterComponent implements OnInit {
  rouletteLogs = rouletteLogList;
  constructor() { }

  ngOnInit(): void {
  }
  clearRouletteLog(){
    this.rouletteLogs.length = 0;
  }
}
