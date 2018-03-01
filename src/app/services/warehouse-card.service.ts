import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class WarehouseCardService {

  API_URL: string = 'http://localhost:3000'

  constructor(private httpClient: HttpClient) { }

  getList(): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.API_URL}/warehouses`, options)
      .toPromise();
  }

  getSingleWarehouse(id): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.API_URL}/warehouses/${id}`, options)
      .toPromise();
  }

  newWarehouse(data): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.post(`${this.API_URL}/warehouses`, data, options)
      .toPromise();
  }
}
