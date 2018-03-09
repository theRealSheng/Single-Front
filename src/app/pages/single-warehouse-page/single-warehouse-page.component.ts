import { Component, OnInit, Input } from '@angular/core';
import { WarehouseCardService } from '../../services/warehouse-card.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-single-warehouse-page',
  templateUrl: './single-warehouse-page.component.html',
  styleUrls: ['./single-warehouse-page.component.scss']
})
export class SingleWarehousePageComponent implements OnInit {

  @Input() newImage: any;

  warehouseArr: any;
  warehouseId: any;
  picture: any;
  imageBaseUrl = 'http://localhost:3000';
  varia: string = 'uploadsWh';
  user: any;

  constructor(
    private warehouseCardService: WarehouseCardService,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.activatedRoute.params
    .subscribe( params => this.warehouseId = params['id']);
  
    this.warehouseCardService.getSingleWarehouse(this.warehouseId)
      .then(warehouse =>{
        this.warehouseArr = warehouse;
      })

    this.authService.me()
    .then(user => this.user = user)
  }

  handleSuccess(newImage) {
    this.warehouseArr.picture = newImage;
  }


}
