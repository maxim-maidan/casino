import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { element } from 'protractor';
@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss']
})
export class ChipComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }
  @Input() chip;
  @Output() chipSelected: EventEmitter<object> = new EventEmitter();

  selectChip(value){
    this.chipSelected.emit(value)
  } 
}
