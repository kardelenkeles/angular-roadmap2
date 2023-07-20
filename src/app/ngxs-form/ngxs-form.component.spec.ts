import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxsFormComponent } from './ngxs-form.component';

describe('NgxsFormComponent', () => {
  let component: NgxsFormComponent;
  let fixture: ComponentFixture<NgxsFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgxsFormComponent]
    });
    fixture = TestBed.createComponent(NgxsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
