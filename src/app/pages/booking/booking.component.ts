import { Component, OnInit, Output } from '@angular/core';
import { BookingService } from '../../services/booking.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { WarehouseCardService } from '../../services/warehouse-card.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  userObj: any;
  feedbackEnabled = false;
  error = '';
  processing = false;
  warehouseID: string;
  warehouse: any;

  constructor(
    private bookingService: BookingService,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private warehouseCardService: WarehouseCardService ) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(params => {
        this.warehouseID = params['id']
        this.warehouseCardService.getSingleWarehouse(this.warehouseID)
          .then(warehouse => this.warehouse = warehouse)
        })

    this.userObj = this.authService.getUser();
  }


  handleSubmitBooking(event) {
    event.warehouseAddress = this.warehouseID;
    event.seller = this.userObj._id;
    this.bookingService.newBooking(event)
      .then(() => {
        console.log("Booking submitted")
      })
      .catch((err) => {
        this.error = err.error.error;
        this.processing = false;
        this.feedbackEnabled = false;
      });
  };
}
