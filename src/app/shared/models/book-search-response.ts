import {Doc} from "@shared/models/doc";

export class BookSearchResponse {
  start?:number;
  num_found?: number;
  docs?:Array<Doc>;
}
