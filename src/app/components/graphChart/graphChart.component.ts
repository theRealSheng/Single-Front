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
  
  useLabels: string;
  typeGraph: string;

  handleCost: any;
  packCost: any;
  storeCost: any;

  handlingSmTotal: number = 0;
  handlingMdTotal: number = 0;
  handlingLgTotal: number = 0;

  packingSmTotal: number = 0;
  packingMdTotal: number = 0;
  packingLgTotal: number = 0;

  constructor() { }

  ngOnInit() {
  }

  getData() {
    if (this.isDone) {
      return;
    }
    this.isDone = true;
    console.log(this.ObjItemSales);

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
      type: 'bar',
      data:
        {
          labels: Object.keys(this.ObjItemSales),
          datasets: [{
            label: 'Gross Revenue by item',
            data: Object.values(this.ObjItemSales),
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255,99,132,1)'
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