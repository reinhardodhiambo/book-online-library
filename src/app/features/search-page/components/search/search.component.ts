import {Component} from '@angular/core';
import {SearchBarComponent} from "@features/search-page/components/search/search-bar/search-bar.component";
import {SearchService} from "@features/search-page/services/search/search.service";
import {SubjectParam} from "@features/landing-page/interfaces/subject-param";
import {SubjectSearchResponse} from "@shared/models/subject-search-response";
import {Work} from "@shared/models/work";
import {Doc} from "@shared/models/doc";
import {BooksComponent} from "@shared/components/books/books.component";

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    SearchBarComponent,
    BooksComponent
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.sass'
})
export class SearchComponent {

  constructor(private searchService: SearchService) {
  }
  books = new Array<Work>();

  loading: boolean = false;

  searchBooks(event: any) {
    console.log(event);
    this.loading = true;
    const sub = this.searchService
      .searchBook(event)
      .subscribe({
        next: (res: any) => {
         this.books = res.docs.map((doc:Doc) => {
           return{
             title:doc.title,
             authors: doc.author_name,
             first_publish_year: doc.first_publish_year,
             cover_id: doc.cover_i,
             key: doc.key,
           }
         })
          this.loading = false;
        },
        error: (err) => {
          console.log(err);
          this.loading = false;
        },
        complete: () => {
          sub.unsubscribe();
          this.loading = false;
        },
      })

  }
}
