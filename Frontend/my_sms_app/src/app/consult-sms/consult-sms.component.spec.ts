import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultSmsComponent } from './consult-sms.component';

describe('ConsultSmsComponent', () => {
  let component: ConsultSmsComponent;
  let fixture: ComponentFixture<ConsultSmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultSmsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultSmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
