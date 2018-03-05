import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Location } from '@angular/common';

import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  loading = true;
  anon: boolean;
  user: any;


  @ViewChild('tabElement') tabElement: ElementRef;

  constructor(
    private authService: AuthService,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit() {
    this.authService.userChange$.subscribe((user) => {
      this.loading = false;
      this.user = user;
      this.anon = !user;
    });

    this.setTab();
  }

  setTab() {
    setTimeout(( )=> {
      const url = this.location.path();
      if (url === '') {
        this.tabElement.nativeElement.children.r1.checked = true;
      }
      if(url.includes('warehouses')) {
        this.tabElement.nativeElement.children.r2.checked = true;
      }
      if(url.includes('dashboard')) {
        this.tabElement.nativeElement.children.r3.checked = true;
      }
      if(url.includes('profile')) {
        this.tabElement.nativeElement.children.r4.checked = true;
      }
    }, 5000)
  }

  login() {
    this.router.navigate(['/auth']);
  }

  signup() {
    this.router.navigate(['/auth']);
  }

  profile() {
    this.router.navigate(['/profile']);
  }

  logout() {
    this.authService.logout()
      .then(() => this.router.navigate(['/auth']));
  }
}