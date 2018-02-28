import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

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

}
