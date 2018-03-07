import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../environments/environment';
import { ActivatedRoute } from '@angular/router';

const apiUrl = environment.apiUrl + '/dashboard';

@Injectable()
export class SummaryApiService {

  constructor(private httpClient: HttpClient) { }

  getSalesList(id): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${apiUrl}/${id}`, options)
      .toPromise();
  }
}
