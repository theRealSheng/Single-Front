import { Component, OnInit } from '@angular/core';
import * as Chart from '../../../../node_modules/chart.js/dist/Chart.bundle.min.js';


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
    
    let data = {
      timeFrame: 2.13,
      sales: 15,
      cost: {
        handling:1.5,
        courier: 4,
        storage: 1,
      }
    }


      const canvas: any = document.createElement('canvas');
      canvas.height = 500;
      canvas.width = 500;
      document.body.appendChild(canvas);
      const context = canvas.getContext('2d');

      this.chart = new Chart(context, {
        type: 'bar',
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
