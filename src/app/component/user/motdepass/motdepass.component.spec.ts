import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotdepassComponent } from './motdepass.component';

describe('MotdepassComponent', () => {
  let component: MotdepassComponent;
  let fixture: ComponentFixture<MotdepassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotdepassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MotdepassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
