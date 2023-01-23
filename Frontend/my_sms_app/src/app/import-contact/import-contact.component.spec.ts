import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportContactComponent } from './import-contact.component';

describe('ImportContactComponent', () => {
  let component: ImportContactComponent;
  let fixture: ComponentFixture<ImportContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
