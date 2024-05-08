import {Component, Input, ViewChild} from '@angular/core';
import {BookComponent} from "@shared/components/books/book/book.component";
import {RouterOutlet} from "@angular/router";
import {Work} from "@shared/models/work";

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [
    RouterOutlet,
    BookComponent
  ],
  templateUrl: './books.component.html',
  styleUrl: './books.component.sass'
})
export class BooksComponent {
  @ViewChild(BookComponent, {static: true}) bookComponent: BookComponent | undefined;
  @Input() books:Work[] = [];
  @Input() page:string = 'landing'
  @Input() loading: boolean = false;

}
