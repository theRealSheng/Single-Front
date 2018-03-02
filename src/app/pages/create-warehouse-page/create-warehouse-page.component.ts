import { Component, OnInit } from '@angular/core';
import { WarehouseCardService } from '../../services/warehouse-card.service';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-create-warehouse-page',
  templateUrl: './create-warehouse-page.component.html',
  styleUrls: ['./create-warehouse-page.component.scss']
})
export class CreateWarehousePageComponent implements OnInit {

  ownerId: string;
  owner: any;
  feedbackEnabled = false;
  error = '';
  processing = false;

  constructor(
    private warehouseCardService: WarehouseCardService,
    private activatedRoute: ActivatedRoute,
    private profileService: ProfileService
  ) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(params => {
        this.ownerId = params['id']
        this.profileService.getUser(this.ownerId)
          .then(owner => this.owner = owner)
      })
  }
  handleSubmitWarehouse(event) {
    event.ownerID = this.ownerId;
    event.companyName = this.owner.companyName;
    this.warehouseCardService.newWarehouse(event)
      .then(() => {
        console.log("New Warehouse Submitted")
      })
      .catch((err) => {
        this.error = err.error.error;
        this.processing = false;
        this.feedbackEnabled = false;
      });
  }
}
