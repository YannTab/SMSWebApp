import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoverPasswordConfirmComponent } from './recover-password-confirm.component';

describe('RecoverPasswordConfirmComponent', () => {
  let component: RecoverPasswordConfirmComponent;
  let fixture: ComponentFixture<RecoverPasswordConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecoverPasswordConfirmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecoverPasswordConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
