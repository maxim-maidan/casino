import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { element } from 'protractor';
import { items } from '../bet-table/bet-item-list';
import { chips } from './chip/chips-list';

@Component({
  selector: 'app-bet-item',
  templateUrl: './bet-item.component.html',
  styleUrls: ['./bet-item.component.scss']
})
export class BetItemComponent implements OnInit {

  @Input() bank: number;
  chips:Array<object> = chips;
  items:Array<object> = items;
  @Output() setChip: EventEmitter<object> = new EventEmitter<object>();
  @Output() clearAllBets: EventEmitter<null> = new EventEmitter<null>();
  constructor() { }

  ngOnInit(): void {
  }
  chipSelected(value) {
    if (value.value <= this.bank) {
      chips.forEach(element => element.isSelected = false);
      value.isSelected = true;
      this.setChip.emit(value.value);
    }
  }
  clearBets(){
    this.clearAllBets.emit();
  }
}
