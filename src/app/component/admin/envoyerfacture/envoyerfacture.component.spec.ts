import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvoyerfactureComponent } from './envoyerfacture.component';

describe('EnvoyerfactureComponent', () => {
  let component: EnvoyerfactureComponent;
  let fixture: ComponentFixture<EnvoyerfactureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnvoyerfactureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvoyerfactureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
