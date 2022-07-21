import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aa070312ConfirmModalComponent } from './aa070312-confirm-modal.component';

describe('Aa070312ConfirmModalComponent', () => {
  let component: Aa070312ConfirmModalComponent;
  let fixture: ComponentFixture<Aa070312ConfirmModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Aa070312ConfirmModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Aa070312ConfirmModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
