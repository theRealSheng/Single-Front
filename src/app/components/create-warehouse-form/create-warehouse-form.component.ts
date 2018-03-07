import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-warehouse-form',
  templateUrl: './create-warehouse-form.component.html',
  styleUrls: ['./create-warehouse-form.component.scss']
})
export class CreateWarehouseFormComponent implements OnInit {

  @Input() ownerCompany: any;
  @Input() feedbackEnabled;
  @Input() processing;
  @Input() error;

  @Output() submitBooking = new EventEmitter<string>();

  warehouse: any = {};

  pricing = {
    storage: 0,
    handling: [0,0,0],
    packaging: [0,0,0]
  }

  constructor() { }

  ngOnInit() {
  }

  submitForm(form) {
    this.error = '';
    this.feedbackEnabled = true;
    if (form.valid) {
      this.processing = true;
      this.warehouse.pricing = this.pricing;
      this.submitBooking.emit(this.warehouse);
    }
    console.log(this.ownerCompany);
  }
}
