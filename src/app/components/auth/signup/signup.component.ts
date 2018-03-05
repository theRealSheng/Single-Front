
import { Component, OnInit, Output, Input,  EventEmitter } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  @Output() submitSignupForm =  new EventEmitter<Object>();

  @Input() feedbackEnabled;
  @Input() error;
  @Input() processing;

  username: String;
  password: String;
  role: String;

  constructor() { }

  ngOnInit() {
  }

  submitForm(form) {
    this.error = '';
    this.feedbackEnabled = true;
    if (form.valid) {
      const data = {
        username: this.username,
        password: this.password,
        role: this.role
      }
      this.submitSignupForm.emit(data);
    };
  }
}
