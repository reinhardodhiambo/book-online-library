import {Component, inject, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Work} from "@shared/models/work";
import {ActivatedRoute} from "@angular/router";
import {HomeService} from "@features/landing-page/services/home/home.service";
import {SubjectSearchResponse} from "@shared/models/subject-search-response";

@Component({
  selector: 'app-book-detail',
  standalone: true,
  imports: [],
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.sass'
})
export class BookDetailComponent implements OnChanges, OnInit {
  book: any = {};
  cover = 'https://placehold.co/400x600';
  private activatedRoute = inject(ActivatedRoute);
  workId = this.activatedRoute.snapshot.params['id'];

  constructor(private homeService: HomeService) {
  }


  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit(): void {
    this.getWorkEditions();
  }

  getWorkEditions() {
    const sub = this.homeService.getWorkEditions(this.workId).subscribe(
      {
        next: (res: any) => {
          if (res.entries) {
            this.book = {
              editions: res.size,
              isbn: res.entries[0]?.isbn_13 || res.entries[0]?.isbn_10,
              publish_date: res.entries[0]?.publish_date,
              title: res.entries[0]?.title,
              pages: res.entries[0]?.number_of_pages,
            }
            if (this.book.isbn) {
              this.getBookByISBN(this.book.isbn)
            }
          }

        },
        error: (err) => {
          console.log(err);

        },
        complete: () => {
          sub.unsubscribe();

        },
      }
    )
  }

  getBookByISBN(ISBN: string) {
    const sub = this.homeService.getBookByISBN(ISBN).subscribe(
      {
        next: (res: any) => {
          if (res[`ISBN:${ISBN}`]) {
            const details = res[`ISBN:${ISBN}`]['details'];
            this.book.authors = details?.authors;
            this.cover = details?.thumbnail_url
          }

        },
        error: (err) => {
          console.log(err);

        },
        complete: () => {
          sub.unsubscribe();

        },
      }
    )
  }

}
