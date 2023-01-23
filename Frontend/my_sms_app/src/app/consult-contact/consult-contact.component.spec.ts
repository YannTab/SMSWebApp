import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultContactComponent } from './consult-contact.component';

describe('ConsultContactComponent', () => {
  let component: ConsultContactComponent;
  let fixture: ComponentFixture<ConsultContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
