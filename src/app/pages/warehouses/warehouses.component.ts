import { Component, OnInit } from '@angular/core';
import { WarehouseCardService } from '../../services/warehouse-card.service';
import { AuthService } from '../../services/auth.service';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-warehouses',
  templateUrl: './warehouses.component.html',
  styleUrls: ['./warehouses.component.scss']
})
export class WarehousesComponent implements OnInit {

  warehouses: Array<{}>;
  user: any;
  userObj: any;

  constructor(
    private warehouseCardService: WarehouseCardService,
    private authService: AuthService,
    private profileService: ProfileService
  ) { }

  ngOnInit() {
    this.warehouseCardService.getList()
      .then(warehouses =>{
        this.warehouses = warehouses;
        console.log(this.warehouses);
      } )

    this.authService.me()
    .then(user => this.user = user)
    .then( () => { 
      return this.profileService.getUser(this.user._id) })
    .then(user => {
      this.userObj = user;
    })
  }


}
