import { Component, OnInit, Input } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @Input() user: any;

  feedbackEnabled = false;
  error = null;
  processing = false;
  userId: string;
  userObj: object;


  constructor(private activatedRoute: ActivatedRoute, private profileService: ProfileService) { }

  ngOnInit() {

    this.activatedRoute.params
      .subscribe(params => {
        this.userId = params['id']
        this.profileService.getUser(this.userId)
        .then(user => this.userObj = user);
      });
  }

  handleSubmitProfile(event) {
      this.profileService.changeProfile(event)
        .then(() => {
          console.log("Profile changed")
        })
        .catch((err) => {
          this.error = err.error.error;
          this.processing = false;
          this.feedbackEnabled = false;

        });
    console.log(event);
    };
}
