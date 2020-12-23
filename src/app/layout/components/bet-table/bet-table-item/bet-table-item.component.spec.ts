import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetTableItemComponent } from './bet-table-item.component';

describe('BetTableItemComponent', () => {
  let component: BetTableItemComponent;
  let fixture: ComponentFixture<BetTableItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BetTableItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BetTableItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
