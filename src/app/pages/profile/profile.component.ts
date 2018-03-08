import { Component, OnInit, Input } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { ActivatedRoute } from '@angular/router';
import { BookingService } from '../../services/booking.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @Input() user: any;
  @Input() newImage: any;
  
  feedbackEnabled; //remove
  processing; //remove 
  error = null;
  userId: string;
  userObj: any;
  picture: any;
  imageBaseUrl = 'http://localhost:3000';
  modifiedProfile: boolean = false;
  varia: string = 'uploads';

  constructor(
    private activatedRoute: ActivatedRoute, 
    private profileService: ProfileService,
    private bookingService: BookingService
  ) { }

  ngOnInit() {

    this.activatedRoute.params
      .subscribe(params => {
        this.userId = params['id']
        this.profileService.getUser(this.userId)
          .then(user => this.userObj = user);
      })
  }

  handleSubmitProfile(event) {
    this.profileService.changeProfile(event)
    .then(() => {
          this.modifiedProfile = true;
          document.getElementById('details').setAttribute("style", "display: inherit;");
          document.getElementById('change').setAttribute("style", "display: none;");
          document.getElementById('upload').setAttribute("style", "display: none;");
        })
        .catch((err) => {
          this.error = err.error.error;
        });
    };


  handleSuccess(newImage) {
    this.userObj.picture = newImage;
  }

  edit() {
    document.getElementById('details').setAttribute("style", "display: none;");
    document.getElementById('change').setAttribute("style", "display: inherit;");
    document.getElementById('upload').setAttribute("style", "display: inherit;");
  }

}
