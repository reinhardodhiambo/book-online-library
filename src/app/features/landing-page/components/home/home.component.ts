import {Component, OnInit} from '@angular/core';
import {BooksComponent} from "@shared/components/books/books.component";
import {HomeService} from "@features/landing-page/services/home/home.service";
import {SubjectParam} from "@features/landing-page/interfaces/subject-param";
import {Work} from "@shared/models/work";
import {SubjectSearchResponse} from "@shared/models/subject-search-response";

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

  books!: Work[];
  loading: boolean = false;
  subject = "finance"

  constructor(private homeService: HomeService) {
  }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks() {
    this.loading = true;
    let data: SubjectParam = {
      limit: 9,
      details:false
    };
    const sub = this.homeService
      .getSubject(data, this.subject)
      .subscribe({
        next: (res: SubjectSearchResponse) => {
          this.books = res.works || [];
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
