import { Component, OnInit } from '@angular/core';
import { WarehouseCardService } from '../../services/warehouse-card.service';

@Component({
  selector: 'app-warehouses',
  templateUrl: './warehouses.component.html',
  styleUrls: ['./warehouses.component.scss']
})
export class WarehousesComponent implements OnInit {

  warehouses: Array<{}>;

  constructor(private warehouseCardService: WarehouseCardService) { }

  ngOnInit() {
    this.warehouseCardService.getList()
      .then(warehouses => this.warehouses = warehouses)
  }
}
