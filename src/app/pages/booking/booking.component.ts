import { Component, OnInit, Output } from '@angular/core';
import { BookingService } from '../../services/booking.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  userId: string

  constructor(private bookingService: BookingService, private activatedRoute: ActivatedRoute, private authService: AuthService ) { }

  ngOnInit() {
    this.authService.getUser()
      .then(user => this.userId = user._id)
  }

}
