import { Injectable } from '@angular/core';
import {HttpService} from "@core/services/http/http.service";

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private httpService: HttpService) { }

  public getWishList(data:any={}) {
    return this.httpService.makeRequest(`people/reinhard_odhiambo/lists/OL253888L/seeds.json?${new URLSearchParams(data).toString()}`, 'GET');
  }
  public updateSeedList(seed: any) {
    return this.httpService.makeRequest(`people/reinhard_odhiambo/lists/OL253888L/seeds`,'POST',seed)
  }
}
