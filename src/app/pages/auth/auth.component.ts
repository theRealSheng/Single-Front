import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {


  error = null;
  processing = false;
  feedbackEnabled = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  handleSubmit(event) {
    console.log(event);
    this.authService.login(event)
    .then((result) => {
      this.router.navigate(['/homepage'])
    })
    .catch((err) => {
      this.error = err.error.error; // :slightly_smiling_face:
      this.processing = false;
      this.feedbackEnabled = false;
    });

  }
}