import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  feedbackEnabled = false;
  error = null;
  processing = false;
  // ... model (e,g. username: String)

  constructor(private authService: AuthService, private router: Router) { }
  username: string;
  password: string;

  ngOnInit() {
  }

  submitForm(form) {
    this.error = '';
    this.feedbackEnabled = true;
    if (form.valid) {
      this.processing = true;
      const data = {
        username: this.username,
        password: this.password
      }
      this.authService.login(data)
        .then((result) => {
          this.router.navigate(['/homepage'])
          //     // ... navigate with this.router.navigate(['...'])
        })
        .catch((err) => {
          this.error = err.error.error; // :slightly_smiling_face:
          this.processing = false;
          this.feedbackEnabled = false;
        });

      };
    }
}
