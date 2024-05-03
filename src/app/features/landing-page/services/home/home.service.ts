import { Injectable } from '@angular/core';
import {HttpService} from "@core/services/http/http.service";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private httpService: HttpService) { }

  public getBooks(data: Record<any, any>) {
    return this.httpService.makeRequest(`search.json?${new URLSearchParams(data).toString()}`, 'GET');
  }
}
