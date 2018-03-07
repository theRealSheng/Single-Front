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
  totalCostItem: Object = {}; // Total cost per item

  handleCost: any;
  packCost: any;
  storeCost: any;

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
      if (!this.objSales[sale.salesDate]) this.objSales[sale.salesDate.substring(0, 10)] = sale.salesPrice;
      else
        this.objSales[sale.salesDate.substring(0, 10)] += sale.salesPrice;
    })

    // -------- Items Names Array & Total revenue per Item
    this.onlineSales.forEach( sale => {
      if (!this.ObjItemSales[sale.productName]) {
        const newObj = {
          productName: sale.productName,
          salesPrices: Number(sale.salesPrice)
        }
        this.ObjItemSales[sale.productName] = newObj;    
      } 
      else {
        this.ObjItemSales[sale.productName].salesPrices += sale.salesPrice;
      }
    })

    // -------- Total cost per Item

    let handlingCost = this.bookedWarehouse[0].warehouseAddress.pricing[0].handling;
    let packagingCost = this.bookedWarehouse[0].warehouseAddress.pricing[0].packaging;
    let storageCost = this.bookedWarehouse[0].warehouseAddress.pricing[0].storage;

    let dims = {
      0: 0.001,
      1: 0.03,
      2: 0.06
    }

    function typeCost(coste){
      this.onlineSales.forEach( sale => {
        if (!this.totalCostItem[sale.productName]){
        const newObj = {
          productName: sale.productName,
          cost: coste === 'storeCost' ? coste[sale.dims] * dims[sale.dims] : coste[sale.dims]
        }
          this.totalCostItem[sale.productName] = newObj;
        }
        else {
          coste === 'storeCost' ? 
            this.totalCostItem[sale.productName].cost += coste[sale.dims] : this.totalCostItem[sale.productName].cost += coste[sale.dims] * dims[sale.dims];
        }
      }) 
    } 

    // if (this.onlineSales !== 'undefined'){
    // // --- Only Packaging Cost

    // this.handleCost = typeCost(handlingCost);

    // // --- Only Handling Cost

    // this.packCost = typeCost(packagingCost);

    // // ---- Only Storage Cost IMPORTANT: ONLY 1 MONTH

    // this.storeCost = typeCost(storageCost);
    // }

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