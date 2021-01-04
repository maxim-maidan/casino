import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bet-counter-item',
  templateUrl: './bet-counter-item.component.html',
  styleUrls: ['./bet-counter-item.component.scss']
})
export class BetCounterItemComponent implements OnInit {

  @Input() log;
  constructor() { }

  ngOnInit(): void {
  }

}
