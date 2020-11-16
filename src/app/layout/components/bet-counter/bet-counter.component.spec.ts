import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetCounterComponent } from './bet-counter.component';

describe('BetCounterComponent', () => {
  let component: BetCounterComponent;
  let fixture: ComponentFixture<BetCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BetCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BetCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
