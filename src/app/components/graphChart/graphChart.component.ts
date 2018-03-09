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
  
  revenue: any;

  objSales: Object = {};  // Total revenue per day
  ObjItemSales: Object = {};  //  Total revenue per item

  constructor() { }

  ngOnInit() {
  }

  getData() {
    if (this.isDone) {
      return;
    }
    this.isDone = true;

    // -------- Setting all sales revenue per date
    this.onlineSales.forEach( sale => {
      if (!this.objSales[sale.salesDate.substring(0, 10)]){
        this.objSales[sale.salesDate.substring(0, 10)] = sale.salesPrice;
      } 
      else {
        this.objSales[sale.salesDate.substring(0, 10)] += sale.salesPrice;
      }

      // -------- Items Names Array & Total revenue per Item

      if (!this.ObjItemSales[sale.productName]) {
        this.ObjItemSales[sale.productName] = sale.salesPrice;
      }
      else {
        this.ObjItemSales[sale.productName] += sale.salesPrice;
      }
    })

    const placeholder = document.getElementById('cvs')
    this.canvas = document.createElement('canvas');
    this.canvas.setAttribute('id', 'canvas');
    placeholder.appendChild(this.canvas);

    const context = this.canvas.getContext('2d');

    this.chart = new Chart(context, {
      type: 'bar',
      data:
        {
          labels: Object.keys(this.ObjItemSales),
          datasets: [{
            label: 'Gross Revenue by item',
            data: Object.values(this.ObjItemSales),
            backgroundColor: '#009675b3',
            borderColor: '#009675'
          }],
        },
      borderWidth: 1,
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