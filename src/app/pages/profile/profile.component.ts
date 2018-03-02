import { Component, OnInit, Input } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { ActivatedRoute } from '@angular/router';
import { UploadService } from '../../services/upload.service';
import { FileUploader } from "ng2-file-upload";

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
  picture: any;
  uploader: FileUploader = new FileUploader({
    url: `/profile/:id`
  });
  feedback: string;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private profileService: ProfileService,
    private uploadService: UploadService) { }

  ngOnInit() {

    this.activatedRoute.params
      .subscribe(params => {
        this.userId = params['id']
        this.profileService.getUser(this.userId)
        .then(user => this.userObj = user);
      });
    this.uploader.onSuccessItem = (item, response) => {
      this.feedback = JSON.parse(response).message;
    };

    this.uploader.onErrorItem = (item, response, status, headers) => {
      this.feedback = JSON.parse(response).message;
    };
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
    };

}
