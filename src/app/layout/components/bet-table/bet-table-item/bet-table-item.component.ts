import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-bet-table-item',
  templateUrl: './bet-table-item.component.html',
  styleUrls: ['./bet-table-item.component.scss']
})
export class BetTableItemComponent implements OnInit {

  @Input() item;
  @Output() itemSelected: EventEmitter<object> = new EventEmitter<object>(); 

  constructor() { }

  ngOnInit(): void {
  }

  selectedItem(item){
    this.itemSelected.emit(item);
  }
}
