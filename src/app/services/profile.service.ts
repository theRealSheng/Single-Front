import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProfileService {

  API_URL: string = 'http://localhost:3000'

  constructor(private httpClient: HttpClient) { }


  changeProfile(id, data): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.put(`${this.API_URL}/user/${id}`, data, options)
      .toPromise();
  }
}
