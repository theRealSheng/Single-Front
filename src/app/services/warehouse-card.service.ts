import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../environments/environment';
const apiUrl = environment.apiUrl + '/warehouses';

@Injectable()
export class WarehouseCardService {

  constructor(private httpClient: HttpClient) { }

  getList(): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${apiUrl}`, options)
      .toPromise();
  }

  getSingleWarehouse(id): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${apiUrl}/${id}`, options)
      .toPromise();
  }

  newWarehouse(data): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.post(`${apiUrl}`, data, options)
      .toPromise();
  }
}
