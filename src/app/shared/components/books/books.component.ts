import {Component, Input, ViewChild} from '@angular/core';
import {BookComponent} from "@shared/components/books/book/book.component";
import {Doc} from "@shared/models/doc";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './books.component.html',
  styleUrl: './books.component.sass'
})
export class BooksComponent {
  @ViewChild(BookComponent, {static: true}) bookComponent: BookComponent | undefined;
  @Input() books:Doc[] = [];

}
