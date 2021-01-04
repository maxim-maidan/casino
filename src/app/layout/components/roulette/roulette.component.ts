import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-roulette',
  templateUrl: './roulette.component.html',
  styleUrls: ['./roulette.component.scss']
})
export class RouletteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() wonSummary;
  @Input() wonNumber;
  @Input() wonColor;

  @Output() spinRoulette: EventEmitter<null> = new EventEmitter<null>();

  spin(){
    this.spinRoulette.emit();
  }

}
