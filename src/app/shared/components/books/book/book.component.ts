import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Work} from "@shared/models/work";
import {Router} from "@angular/router";

@Component({
  selector: 'app-book',
  standalone: true,
  templateUrl: './book.component.html',
  styleUrl: './book.component.sass'
})
export class BookComponent implements OnInit, OnChanges {

  @Input() book!: Work;
  @Input() page: string = 'landing'
  cover = 'https://placehold.co/400x600';

  constructor( private router: Router) {
  }


  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes?.['book']) {
      this.setCover()
    }

  }

  setCover() {
    if (this.book?.cover_id) {
      this.cover = `https://covers.openlibrary.org/b/id/${this.book?.cover_id}-M.jpg`;
    }
  }

  viewBook() {
    this.router.navigate([`/book-details${this.book?.key}`]);
  }


}
