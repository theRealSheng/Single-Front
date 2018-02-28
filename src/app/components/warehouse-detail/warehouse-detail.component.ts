import { Component, OnInit } from '@angular/core';
import { WarehouseCardService } from '../../services/warehouse-card.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-warehouse-detail',
  templateUrl: './warehouse-detail.component.html',
  styleUrls: ['./warehouse-detail.component.scss']
})
export class WarehouseDetailComponent implements OnInit {

  warehouse: Array<{}>;
  warehouseId: any;

  constructor(private warehouseCardService: WarehouseCardService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.activatedRoute.params
    .subscribe( params => this.warehouseId = params['id']);
    
    this.warehouseCardService.getSingleWarehouse(this.warehouseId)
      .then(warehouse => this.warehouse = warehouse)
  }

}