import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-warehouse-list',
  templateUrl: './warehouse-list.component.html',
  styleUrls: ['./warehouse-list.component.scss']
})
export class WarehouseListComponent implements OnInit {

  @Input() warehouses: any;
  constructor() { }

  ngOnInit() {
  }

}
