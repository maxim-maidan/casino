import { Component, OnInit } from '@angular/core';
import { rouletteLogList } from '../../components/bet-counter/bet-counter-item/bet-counter-items-list';
import { chips } from '../../components/bet-item/chip/chips-list';
import { items } from '../../components/bet-table/bet-item-list';
import { v4 as uuid } from 'uuid';
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
  rouletteLogList = rouletteLogList;
  wonNumber: number = 0;
  wonSummary: number = 0;
  wonColor: string = 'green';
  betSpend: number = 0;
  betsCounter: number = 0;
  constructor() { }

  ngOnInit(): void {
  }
  setChip(SelectedChipValue: number) {
    this.currentChip = SelectedChipValue;
  }
  selectItem(item) {
    item.bet = item.bet + this.currentChip;
    this.bank = this.bank - this.currentChip;
    this.betsCounter++;
    if (this.bank < this.currentChip) {
      chips.map(element => element.isSelected = false);
      this.currentChip = 0;
    }
  }
  clearAllBets() {
    chips.map(element => element.isSelected = false);
    items.forEach(element => this.bank += element.bet);
    items.map(element => element.bet = 0);
    this.currentChip = 0;
  }
  spinRoulette() {
    this.roundRoulette(720, 1000);
    for (let i = 0; i <= 1000; i += 200) {
      setTimeout(() => {
        this.wonNumber = Math.round(Math.random() * 36);
        this.wonColor = items.find(el => el.name === this.wonNumber).color;
        if (i === 1000) {
          this.countSum();
          this.roundRoulette(0,0);
        }
      }, i);
    }
  }
  countSum() {
    this.wonSummary = 0;
    this.items.forEach(el => {
      this.betSpend += el.bet; 
      if (el.value.includes(this.wonNumber)) {
        this.wonSummary += el.bet * el.coefficient;
      }
    });
    this.bank += this.wonSummary;
    this.items.map(element => element.bet = 0);
    this.addRouletteLog();
  }
  roundRoulette(deg, time) {
    this.getElemStyle('roulette').transitionDuration = time + 'ms'
    this.getElemStyle('roulette').transform = 'rotate(' + deg + 'deg)';
  }
  addRouletteLog(){
    if(rouletteLogList.length >= 9) rouletteLogList.shift(); 
    rouletteLogList.push({id: uuid(), bet: this.betSpend, summary: (this.wonSummary - this.betSpend),win: this.wonSummary, betsCount: this.betsCounter, wonNumber: this.wonNumber, wonColor: this.wonColor});
    this.betSpend = 0;
    console.log(rouletteLogList);
  }
  getElemStyle = id => document.getElementById(id).style;
}

