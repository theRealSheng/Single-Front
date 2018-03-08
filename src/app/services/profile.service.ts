import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../environments/environment';
const apiUrl = environment.apiUrl + '/user';

@Injectable()
export class ProfileService {

  constructor(private httpClient: HttpClient) { }

  getUser(id): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${apiUrl}/${id}`, options)
      .toPromise();
  }

  changeProfile(data): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.put(`${apiUrl}/${data._id}`, data, options)
      .toPromise();
  }

}
