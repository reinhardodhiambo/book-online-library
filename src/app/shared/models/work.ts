import {Author} from "@shared/models/author";
import {Availability} from "@shared/models/availability";

export class Work {
  key?: string;
  title?: string;
  edition_count?: number;
  cover_id?: number;
  cover_edition_key?: string;
  subject?: string[];
  ia_collection?: string[];
  lendinglibrary?: boolean;
  printdisabled?: boolean;
  lending_edition?: string;
  lending_identifier?: string;
  authors?: Author[];
  first_publish_year?: number;
  ia?: string;
  public_scan?: boolean;
  has_fulltext?: boolean;
  availability?: Availability;

  constructor(data: any) {
    this.key = data.key;
    this.title = data.title;
    this.edition_count = data.edition_count;
    this.cover_id = data.cover_id;
    this.cover_edition_key = data.cover_edition_key;
    this.subject = data.subject;
    this.ia_collection = data.ia_collection;
    this.lendinglibrary = data.lendinglibrary;
    this.printdisabled = data.printdisabled;
    this.lending_edition = data.lending_edition;
    this.lending_identifier = data.lending_identifier;
    this.authors = data.authors?.map((authorData: any) => new Author(authorData));
    this.first_publish_year = data.first_publish_year;
    this.ia = data.ia;
    this.public_scan = data.public_scan;
    this.has_fulltext = data.has_fulltext;
    this.availability = data.availability && new Availability(data.availability);
  }
}
