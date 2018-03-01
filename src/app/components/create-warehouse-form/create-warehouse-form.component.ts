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

  constructor() { }

  ngOnInit() {
  }

  submitForm(form) {
    this.error = '';
    this.feedbackEnabled = true;
    if (form.valid) {
      this.processing = true;
      this.submitBooking.emit(this.warehouse);
    }
  }
}
