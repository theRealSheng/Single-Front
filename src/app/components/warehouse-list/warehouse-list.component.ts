import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-warehouse-list',
  templateUrl: './warehouse-list.component.html',
  styleUrls: ['./warehouse-list.component.scss']
})
export class WarehouseListComponent implements OnInit {

  @Input() warehouses: any;

  baseUrl = environment.apiUrl;

  constructor() { }

  ngOnInit() {
<<<<<<< HEAD
||||||| merged common ancestors
    console.log(this.warehouses.picture);
    console.log(this.warehouses);
=======
    
>>>>>>> 4afbdaa8f0934d3d9afeee7bbf1917c8201302ca
  }

}
