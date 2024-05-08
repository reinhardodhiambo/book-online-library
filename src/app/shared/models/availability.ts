
export class Availability {
  status?: string;
  available_to_browse?: boolean;
  available_to_borrow?: boolean;
  available_to_waitlist?: boolean;
  is_printdisabled?: boolean;
  is_readable?: boolean;
  is_lendable?: boolean;
  is_previewable?: boolean;
  identifier?: string;
  isbn?: string | null;
  oclc?: string | null;
  openlibrary_work?: string;
  openlibrary_edition?: string;
  last_loan_date?: string | null;
  num_waitlist?: number | null;
  last_waitlist_date?: string | null;
  is_restricted?: boolean;
  is_browseable?: boolean;
  __src__?: string;

  constructor(data: any) {
    this.status = data.status;
    this.available_to_browse = data.available_to_browse;
    this.available_to_borrow = data.available_to_borrow;
    this.available_to_waitlist = data.available_to_waitlist;
    this.is_printdisabled = data.is_printdisabled;
    this.is_readable = data.is_readable;
    this.is_lendable = data.is_lendable;
    this.is_previewable = data.is_previewable;
    this.identifier = data.identifier;
    this.isbn = data.isbn;
    this.oclc = data.oclc;
    this.openlibrary_work = data.openlibrary_work;
    this.openlibrary_edition = data.openlibrary_edition;
    this.last_loan_date = data.last_loan_date;
    this.num_waitlist = data.num_waitlist;
    this.last_waitlist_date = data.last_waitlist_date;
    this.is_restricted = data.is_restricted;
    this.is_browseable = data.is_browseable;
    this.__src__ = data.__src__;
  }
}
