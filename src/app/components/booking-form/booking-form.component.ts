import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.scss']
})
export class BookingFormComponent implements OnInit {

  @Input() warehouse: Array<any>;


  constructor() { }

  ngOnInit() {
  }




}
