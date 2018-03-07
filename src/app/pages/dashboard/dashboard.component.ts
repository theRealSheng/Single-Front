import { Component, OnInit } from '@angular/core';
import { SummaryApiService } from './../../services/summary-api.service';
import { ActivatedRoute } from '@angular/router';
import { BookingService } from './../../services/booking.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  onlineSales: any;
  userId: string;
  bookings: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private summaryApiService: SummaryApiService,
    private bookingService: BookingService
  ) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(params => {
        this.userId = params['id'];
        this.bookingService.getBookingListSeller(this.userId)
        .then(booking=> this.bookings = booking);
      })
  }

}
