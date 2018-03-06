import { Component, OnInit } from '@angular/core';
import * as Chart from '../../../../node_modules/chart.js/dist/Chart.bundle.min.js';
import { SummaryApiService } from './../../services/summary-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-graphChart',
  templateUrl: './graphChart.component.html',
  styleUrls: ['./graphChart.component.scss']
})
export class GraphChartComponent implements OnInit {

  chart: any;
  canvas: any;

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
    
    let dates;
    
    const placeholder = document.getElementById('cvs')
    this.canvas = document.createElement('canvas');
    this.canvas.setAttribute('id', 'canvas');
    placeholder.appendChild(this.canvas);
      // this.createCanvas();
  
    const context = this.canvas.getContext('2d');

    this.chart = new Chart(context, {
      type: 'line',
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }
}
