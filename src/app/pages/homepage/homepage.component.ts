import { Component, OnInit } from '@angular/core';

import * as chart from '../../../../node_modules/chart.js'

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    console.log(chart);

  }

}
