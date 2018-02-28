import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  feedbackEnabled = false;
  error = null;
  processing = false;
  profileId: string;
  companyName: string;
  companyAddress: string;
  email: string;
  description: string;

  constructor(private profileService: ProfileService, private activatedRoute: ActivatedRoute ) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(params => this.profileId = params['id']);
  }

  submitForm(form) {
    this.error = '';
    this.feedbackEnabled = true;
    if (form.valid) {
      this.processing = true;

      const data = {
        companyName: this.companyName,
        companyAddress: this.companyAddress,
        email: this.email,
        description: this.description
      }
      this.profileService.changeProfile( this.profileId, data )
        .then(() => {
          console.log("Profile changed")
        })
        .catch((err) => {
          this.error = err.error.error; 
          this.processing = false;
          this.feedbackEnabled = false;
        });

    };
  }
}
