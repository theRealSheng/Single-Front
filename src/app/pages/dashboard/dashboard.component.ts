import { Component, OnInit } from '@angular/core';
import { SummaryApiService } from './../../services/summary-api.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  onlineSales: any;
  userId: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private summaryApiService: SummaryApiService
  ) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(params => {
        this.userId = params['id'];
        this.summaryApiService.getSalesLis(this.userId)
        .then(onlineSales => {
          this.onlineSales = onlineSales;
        });

      })
  }


}
