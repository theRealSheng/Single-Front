import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.scss']
})
export class BookingFormComponent implements OnInit {

  @Input() warehouse: any;
  @Input() user: any;
  @Input() feedbackEnabled;
  @Input() processing;
  @Input() error;

  @Output() submitBooking = new EventEmitter<string>();
  
  booking: any = {};  

  constructor() { }

  ngOnInit() {
  }

  submitForm(form) {
    this.error = '';
    this.feedbackEnabled = true;
    if (form.valid) {
      this.processing = true;
      this.submitBooking.emit(this.booking);
    }
  }
}
