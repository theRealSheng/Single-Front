import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-profile-form-edit',
  templateUrl: './profile-form-edit.component.html',
  styleUrls: ['./profile-form-edit.component.scss']
})
export class ProfileFormEditComponent implements OnInit {

  @Output() submitProfile = new EventEmitter<any>();
  @Input() user: any;

  @Input() feedbackEnabled = false;
  @Input() error = null;
  @Input() processing = false;

  constructor() { }

  ngOnInit() {
  }

  submitForm(form) {
    this.error = '';
    this.feedbackEnabled = true;
    if (form.valid) {
      this.processing = true;
      this.submitProfile.emit(this.user);
    }
  }
}
