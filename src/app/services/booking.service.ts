import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class BookingService {

  API_URL: string = 'http://localhost:3000'

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

  getBookingList(): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.API_URL}/booking`, options)
      .toPromise();
  }

  newBooking(data): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.post(`${this.API_URL}/booking/`, data, options)
      .toPromise();
  }

}
