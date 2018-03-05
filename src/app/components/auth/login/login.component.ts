import { Component, OnInit, Output, Input,  EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Output() submitLoginForm =  new EventEmitter<Object>();

  @Input() feedbackEnabled;
  @Input() error;
  @Input() processing;
  username: string;
  password: string;

  constructor() { }

  ngOnInit() {
  }

  submitForm(form) {
    this.error = '';
    this.feedbackEnabled = true;
    if (form.valid) {
      const data = {
        username: this.username,
        password: this.password
      }
      this.submitLoginForm.emit(data);
    }
  }
}
