import {Injectable} from '@angular/core';
import {HttpService} from "@core/services/http/http.service";
import {Subject} from "rxjs";
import {Work} from "@shared/models/work";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private bookDetails = new Subject<Work>();
  bookDetails$ = this.bookDetails.asObservable();

  constructor(private httpService: HttpService) {
  }

  public getBooks(data: Record<any, any>) {
    return this.httpService.makeRequest(`search.json?${new URLSearchParams(data).toString()}`, 'GET');
  }

  public getSubject(data: Record<any, any>, subject: string) {
    return this.httpService.makeRequest(`subjects/${subject}.json?${new URLSearchParams(data).toString()}`, 'GET');
  }

  async setBookDetails(book: Work) {
    this.bookDetails.next(book);
  }

  public getWorkEditions(workId: string) {
    return this.httpService.makeRequest(`works/${workId}/editions.json?=isbn`,'GET');
  }
  public getBookByISBN(ISBN: string) {
    return this.httpService.makeRequest(`api/books?bibkeys=ISBN:${ISBN}&jscmd=details&format=json`, 'GET');
  }


}
