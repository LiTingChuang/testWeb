import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AA070listComponent } from './aa070312-list.component';

describe('AA070listComponent', () => {
  let component: AA070listComponent;
  let fixture: ComponentFixture<AA070listComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AA070listComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AA070listComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
