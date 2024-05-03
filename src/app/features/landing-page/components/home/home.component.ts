import {Component, OnInit} from '@angular/core';
import {BooksComponent} from "@shared/components/books/books.component";
import {HomeService} from "@features/landing-page/services/home/home.service";
import {BookParam} from "@features/landing-page/interfaces/book-param";
import {BookSearchResponse} from "@shared/models/book-search-response";
import {Doc} from "@shared/models/doc";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    BooksComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent implements OnInit {

  books!: Doc[];

  constructor(private homeService: HomeService) {
  }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks() {
    let data: BookParam = {
      q: "finance",
      limit: "9"
    };
    const sub = this.homeService
      .getBooks(data)
      .subscribe({
        next: (res: BookSearchResponse) => {
          this.books = res.docs || [];
        },
        error: (err) => {
          console.log(err);
        },
        complete: () => {
          sub.unsubscribe();
        },
      })
  }

}
