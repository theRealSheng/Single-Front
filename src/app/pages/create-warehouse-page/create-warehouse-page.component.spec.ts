import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateWarehousePageComponent } from './create-warehouse-page.component';

describe('CreateWarehousePageComponent', () => {
  let component: CreateWarehousePageComponent;
  let fixture: ComponentFixture<CreateWarehousePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateWarehousePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateWarehousePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
