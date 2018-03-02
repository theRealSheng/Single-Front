import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UploadService {

  API_URL: string = 'http://localhost:3000'

  constructor(private httpClient: HttpClient) { }

  getPhoto(id): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.API_URL}/uploads/${id}`, options)
      .toPromise();
  }

  postBook(photo) {
    const options = {
      withCredentials: true
    };
    return this.httpClient.post(`${this.API_URL}/uploads`, photo, options)
      .toPromise()
  }
}
