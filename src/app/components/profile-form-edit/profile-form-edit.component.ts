import { Component, OnInit, Input, Output } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-form-edit',
  templateUrl: './profile-form-edit.component.html',
  styleUrls: ['./profile-form-edit.component.scss']
})
export class ProfileFormEditComponent implements OnInit {

  @Input() user: any;

  feedbackEnabled = false;
  error = null;
  processing = false;

  constructor(private profileService: ProfileService, private activatedRoute: ActivatedRoute ) { }

  ngOnInit() {
  }


  submitForm(form) {
    this.error = '';
    this.feedbackEnabled = true;
    if (form.valid) {
      this.processing = true;

      this.profileService.changeProfile(this.user)
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
