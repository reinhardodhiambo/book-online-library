import {Component, Input} from '@angular/core';
import {Doc} from "@shared/models/doc";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: './book.component.html',
  styleUrl: './book.component.sass'
})
export class BookComponent {
  @Input() book: Doc = {};
  placeholder = 'https://placehold.co/400x600';

  getCover(code: string[] | undefined) {
    if (code && code[0]) {
      return `https://covers.openlibrary.org/b/isbn/${code[0]}-M.jpg`;
    } else {
      return this.placeholder;
    }

  }


}
