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

  handlingSmTotal: number = 0;
  handlingMdTotal: number = 0;
  handlingLgTotal: number = 0;

  packingSmTotal: number = 0;
  packingMdTotal: number = 0;
  packingLgTotal: number = 0;

  totalStorageCost: number = 0;
  totalHandlingPackingCost: number = 0;

  totalCost: number = 0;
  totalSalesRevenue: number = 0;

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
        const promise1 = this.bookingService.getBookingListSeller(this.userId)
          .then(booking=>{
            this.bookedWarehouse = booking;
          }) 
        // Pull the sales from Ecommerce site
        const promise2 =  this.summaryApiService.getSalesList(this.userId)
          .then(onlineSales => {
            this.onlineSales = onlineSales;
          })

        Promise.all([promise1,promise2])
          .then(()=>{
            let handlingCost = this.bookedWarehouse[0].warehouseAddress.pricing[0].handling;
            let packagingCost = this.bookedWarehouse[0].warehouseAddress.pricing[0].packaging;
            let storageCost = this.bookedWarehouse[0].warehouseAddress.pricing[0].storage;
            
            //Volume per package
            let dims = {
              0: 0.001,
              1: 0.03,
              2: 0.06
            }

            this.onlineSales.forEach(sale => {
              if (sale.dims === 0) {
                this.handlingSmTotal += handlingCost[0];
                this.packingSmTotal += packagingCost[0];
              }

              if (sale.dims === 1) {
                this.handlingMdTotal += handlingCost[1];
                this.packingMdTotal += packagingCost[1];
              }

              if (sale.dims === 2) {
                this.handlingLgTotal += handlingCost[2];
                this.packingLgTotal += packagingCost[2];
              }

              this.totalHandlingPackingCost += handlingCost[sale.dims] + packagingCost[sale.dims];
              this.totalStorageCost += storageCost * dims[sale.dims];

              this.totalCost = this.totalHandlingPackingCost + this.totalStorageCost;

              this.totalSalesRevenue += sale.salesPrice;
            })
          })
      })
  }


}
