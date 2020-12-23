import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { reduce } from 'rxjs/operators';
import { items } from './bet-item-list';

@Component({
  selector: 'app-bet-table',
  templateUrl: './bet-table.component.html',
  styleUrls: ['./bet-table.component.scss']
})
export class BetTableComponent implements OnInit {

  items = items;
  @Output() selectItem: EventEmitter<object> = new EventEmitter<object>();
  constructor() { }

  ngOnInit(): void {
  }

  itemSelected(item){
    this.selectItem.emit(item);
  }
}
