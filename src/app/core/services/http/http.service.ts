import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "@environments/environment";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  public makeRequest(path: string, method: string, body?: any) {
    return this.httpClient.request(
      method,
      `${environment.BASE_URL}${path}`,
      { body }
    );
  }
}
