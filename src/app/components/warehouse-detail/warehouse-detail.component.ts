import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-warehouse-detail',
  templateUrl: './warehouse-detail.component.html',
  styleUrls: ['./warehouse-detail.component.scss']
})
export class WarehouseDetailComponent implements OnInit {

  @Input() warehouse: any;
  @Input() user: any;

  constructor() { }

  ngOnInit() {
  }

}