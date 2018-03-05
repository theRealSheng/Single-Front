import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../environments/environment';
const apiUrl = environment.apiUrl + '/booking';

@Injectable()
export class BookingService {

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

  getBookingListSeller(id): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${apiUrl}/${id}`, options)
      .toPromise();
  }

  newBooking(data): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.post(`${apiUrl}`, data, options)
      .toPromise();
  }

}
