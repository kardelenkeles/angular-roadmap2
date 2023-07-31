import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSetComponent } from './data-set.component';

describe('DataSetComponent', () => {
  let component: DataSetComponent;
  let fixture: ComponentFixture<DataSetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataSetComponent]
    });
    fixture = TestBed.createComponent(DataSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
