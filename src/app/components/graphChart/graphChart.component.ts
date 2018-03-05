import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-chart.js';


@Component({
  selector: 'app-graphChart',
  templateUrl: './graphChart.component.html',
  styleUrls: ['./graphChart.component.scss']
})
export class GraphChartComponent implements OnInit {

  chart: any;
  sumDates: string;
  canvas: any;

  constructor() { }

  ngOnInit() {
    

    // this.chart = new Chart('canvas', {
    //   type: 'line',
    //   data: {
    //     labels: [timeFrame],
    //     datasets: [
    //       {
    //         data: [Data1],
    //         borderColor: "#3cba9f",
    //         fill: false
    //       },
    //       {
    //         data: [Data2],
    //         borderColor: "#ffcc00",
    //         fill: false
    //       },
    //     ]
    //   },
    //   options: {
    //     legend: {
    //       display: false
    //     },
    //     scales: {
    //       xAxes: [{
    //         display: true
    //       }],
    //       yAxes: [{
    //         display: true
    //       }],
    //     }
    //   }
    // });
  }

}
