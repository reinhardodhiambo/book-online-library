import { Injectable } from '@angular/core';
import {HttpService} from "@core/services/http/http.service";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private httpService: HttpService) { }
  public searchBook(data:string) {
    return this.httpService.makeRequest(`search.json?q=${data}&limit=9`, 'GET');
  }

}
