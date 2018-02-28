import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleWarehousePageComponent } from './single-warehouse-page.component';

describe('SingleWarehousePageComponent', () => {
  let component: SingleWarehousePageComponent;
  let fixture: ComponentFixture<SingleWarehousePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleWarehousePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleWarehousePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
