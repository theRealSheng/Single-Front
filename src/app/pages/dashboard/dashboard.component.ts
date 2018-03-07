import { Component, OnInit } from '@angular/core';
import { SummaryApiService } from './../../services/summary-api.service';
import { ActivatedRoute } from '@angular/router';
import { BookingService } from './../../services/booking.service';
import { WarehouseCardService } from './../../services/warehouse-card.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  onlineSales: any;
  userId: string;
  bookedWarehouse: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private summaryApiService: SummaryApiService,
    private bookingService: BookingService,
    private warehouseCardService: WarehouseCardService
  ) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(params => {
        this.userId = params['id'];
        // Pull the booked warehouse
        this.bookingService.getBookingListSeller(this.userId)
          .then(booking=>{
            this.bookedWarehouse = booking;
            console.log(this.bookedWarehouse);
            console.log(this.bookedWarehouse[0].warehouseAddress.warehouseAddress)
          }) 
        // Pull the sales from Ecommerce site
          this.summaryApiService.getSalesList(this.userId)
          .then(onlineSales => {
            this.onlineSales = onlineSales;
          })
      })
  }

}
