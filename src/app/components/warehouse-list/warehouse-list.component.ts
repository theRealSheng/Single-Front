import { Component, OnInit } from '@angular/core';
import { WarehouseCardService } from '../../services/warehouse-card.service';

@Component({
  selector: 'app-warehouse-list',
  templateUrl: './warehouse-list.component.html',
  styleUrls: ['./warehouse-list.component.scss']
})
export class WarehouseListComponent implements OnInit {

  warehouses: Array<{}>;

  constructor(private warehouseCardService: WarehouseCardService) { }

  ngOnInit() {
    this.warehouseCardService.getList()
      .then(warehouses => this.warehouses = warehouses)
      // .catch(err => this.err)
  }

}
