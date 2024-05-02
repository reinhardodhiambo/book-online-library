import { Injectable } from '@angular/core';
import {HttpService} from "@core/services/http/http.service";
import {BookParam} from "@features/landing-page/interfaces/book-param";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private httpService: HttpService) { }

  public getBooks(data: BookParam) {
    return this.httpService.makeRequest('/search.json', 'GET');
  }
}
