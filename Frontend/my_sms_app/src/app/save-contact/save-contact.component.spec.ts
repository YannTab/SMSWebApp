import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveContactComponent } from './save-contact.component';

describe('SaveContactComponent', () => {
  let component: SaveContactComponent;
  let fixture: ComponentFixture<SaveContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaveContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
