import { Component, OnInit, Input } from '@angular/core';
import * as Chart from '../../../../node_modules/chart.js/dist/Chart.bundle.min.js';


@Component({
  selector: 'app-graphChart',
  templateUrl: './graphChart.component.html',
  styleUrls: ['./graphChart.component.scss']
})
export class GraphChartComponent implements OnInit {

  @Input() bookedWarehouse: any;
  @Input() onlineSales: any;
  chart: any;
  canvas: any;
  isDone: boolean = false;
  
  dates: Array<any> = []; // Dates array
  objSales: Object = {};  // Object for total revenue per day

  items: Array<any> = []   // Items names array
  ObjItemSales: Array<any>;  // Object for total revenue per item

  constructor() { }

  ngOnInit() {
  }

  getData() {
    if (this.isDone) {
      return;
    }
    this.isDone = true;
    // Setting all sales revenue per date
    this.onlineSales.forEach((sale) => {
      this.dates.push(sale.salesDate);
      if (!this.objSales[sale.salesDate]) this.objSales[sale.salesDate.substring(0, 10)] = sale.salesPrice;
      else
        this.objSales[sale.salesDate.substring(0, 10)] += sale.salesPrice;
    })

    // Setting all sales per item
    this.onlineSales.forEach((sale) => {
      if (!this.objSales[sale.salesDate]) this.objSales[sale.salesDate.substring(0, 10)] = sale.salesPrice;
      else
        this.objSales[sale.salesDate.substring(0, 10)] += sale.salesPrice;
    })

    const placeholder = document.getElementById('cvs')
    this.canvas = document.createElement('canvas');
    this.canvas.setAttribute('id', 'canvas');
    placeholder.appendChild(this.canvas);
    // this.createCanvas();

    const context = this.canvas.getContext('2d');

    this.chart = new Chart(context, {
      type: 'line',
      data: {
        labels: Object.keys(this.objSales),
        datasets: [{
          label: 'Sales by Date',
          data: Object.values(this.objSales),
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
    })
  }
}