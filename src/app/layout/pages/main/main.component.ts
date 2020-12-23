import { Component, OnInit } from '@angular/core';
import { chips } from '../../components/bet-item/chip/chips-list';
import { items } from '../../components/bet-table/bet-item-list';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  currentChip: number = 0;
  bank: number = 1000;
  chips = chips;
  items = items;
  constructor() { }

  ngOnInit(): void {
  }
  setChip(SelectedChipValue:number) {
    this.currentChip = SelectedChipValue;
  }
  selectItem(item){
    item.bet = item.bet + this.currentChip;
    this.bank = this.bank - this.currentChip;
    if(this.bank < this.currentChip){
      chips.map(element => element.isSelected = false);
      this.currentChip = 0;
    }
  }
  clearAllBets(){
    chips.map(element => element.isSelected = false);
    items.forEach(element => this.bank += element.bet);
    items.map(element => element.bet = 0);
    this.currentChip = 0;
  }
}
