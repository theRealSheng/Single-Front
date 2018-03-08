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
  canvas2: any;
  canvas3: any;
  isDone: boolean = false;
  
  revenue: any;

  objSales: Object = {};  // Total revenue per day
  ObjItemSales: Object = {};  //  Total revenue per item

  objItemSalesDate: Object = {}; // Total sales per item per data
  nameofProducts: Array<any> = [];

  totalCostHanItem: Object = {}; // Total handling cost per item
  totalCostPackItem: Object = {}; // Total pack cost per item
  totalCostStoreItem: Object = {}; // Total store cost per item

  handleCost: any;
  packCost: any;
  storeCost: any;
  useLabels: string;
  typeGraph: string;

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
          salesPrices: sale.salesPrice,
        }
        this.ObjItemSales[sale.productName] = newObj;    
      } 
      else {
        this.ObjItemSales[sale.productName].salesPrices += sale.salesPrice;
      }
    })

    // -------- Items Names Array & Total revenue per Item/day
    this.onlineSales.forEach(sale => {
      if (!this.ObjItemSales[sale.productName][sale.salesDate.substring(0, 10)]) {
        this.ObjItemSales[sale.productName][sale.salesDate.substring(0, 10)] = sale.salesPrice
      }
      else {
        this.ObjItemSales[sale.productName][sale.salesDate.substring(0, 10)] += sale.salesPrice;
      }
    })

        console.log(this.nameofProducts);

    // -------- Total cost per Item
    let handlingCost = this.bookedWarehouse[0].warehouseAddress.pricing[0].handling;
    let packagingCost = this.bookedWarehouse[0].warehouseAddress.pricing[0].packaging;
    let storageCost = this.bookedWarehouse[0].warehouseAddress.pricing[0].storage;

    let dims = {
      0: 0.001,
      1: 0.03,
      2: 0.06
    }

    function typeCost (coste, sales, totalCost) {
      sales.forEach( sale => {
        if (!totalCost[sale.productName]) {
          totalCost[sale.productName] = Array.isArray(coste) ? coste[sale.dims]: coste * dims[sale.dims];
        } 
        else {
          Array.isArray(coste) ? 
            totalCost[sale.productName] += coste[sale.dims] : totalCost[sale.productName] += coste * dims[sale.dims];
          }
        }) 
      return totalCost;
    } 

    // --- Only Packaging Cost
    this.handleCost = typeCost(handlingCost, this.onlineSales, this.totalCostHanItem);

    // --- Only Handling Cost
    this.packCost = typeCost(packagingCost, this.onlineSales, this.totalCostPackItem);

    // ---- Only Storage Cost IMPORTANT: ONLY 1 MONTH
    this.storeCost = typeCost(storageCost, this.onlineSales, this.totalCostStoreItem);

    const placeholder3 = document.getElementById('cvs3')
    this.canvas3 = document.createElement('canvas');
    this.canvas3.setAttribute('id', 'canvas');
    placeholder3.appendChild(this.canvas3);

    const context3 = this.canvas3.getContext('2d');

    this.chart = new Chart(context3, {
      type: 'line',

      data:
        {
          labels: Object.keys(this.objSales),
          datasets: [{
            label: 'this.ObjItemSales[0]',
            data: [1, 2, 3, 1, 2, 3, 1, 2, 3],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255,99,132,1)'
          },
          {
            label: 'animals',
            data: [20, 30, 40],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255,99,132,1)'
          },
          {
            label: '',
            data: ['undefined'],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255,99,132,1)'
          }
          ],
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

    const placeholder = document.getElementById('cvs')
    this.canvas = document.createElement('canvas');
    this.canvas.setAttribute('id', 'canvas');
    placeholder.appendChild(this.canvas);

    const context = this.canvas.getContext('2d');

    this.chart = new Chart(context, {
      type: 'line',
      data: {
        labels: Object.keys(this.ObjItemSales),
        datasets: [{
          label: 'Sales by Date',
          data: Object.values(this.objSales),
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255,99,132,1)'
        }],
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
    }
    })

    const placeholder2 = document.getElementById('cvs2')
    this.canvas2 = document.createElement('canvas');
    this.canvas2.setAttribute('id', 'canvas2');
    placeholder.appendChild(this.canvas2);

    const context2 = this.canvas2.getContext('2d');

    this.chart = new Chart(context2, {
      type: 'bar',
      data: {
        labels: Object.keys(this.totalCostHanItem),
        datasets: [{
          label: 'Total Handling Cost Per Item',
          data: Object.values(this.totalCostHanItem),
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255,99,132,1)'
        }],
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
      }
    })

  }
}