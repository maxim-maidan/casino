import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetCounterItemComponent } from './bet-counter-item.component';

describe('BetCounterItemComponent', () => {
  let component: BetCounterItemComponent;
  let fixture: ComponentFixture<BetCounterItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BetCounterItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BetCounterItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
