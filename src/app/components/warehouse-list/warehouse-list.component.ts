import { Component, OnInit } from '@angular/core';
import { WarehouseCardService } from '../../services/warehouse-card.service';

@Component({
  selector: 'app-warehouse-list',
  templateUrl: './warehouse-list.component.html',
  styleUrls: ['./warehouse-list.component.scss']
})
export class WarehouseListComponent implements OnInit {

  warehouses: Array<any>;

  constructor(private warehouseCardService: WarehouseCardService) { }

  ngOnInit() {
    this.warehouseCardService.getList()
    .then(warehouses => this.warehouses = warehouses);
  }

}
