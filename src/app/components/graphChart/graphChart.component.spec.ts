import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphChartComponent } from './graphChart.component';

describe('graphChartComponent', () => {
  let component: GraphChartComponent;
  let fixture: ComponentFixture<GraphChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GraphChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
