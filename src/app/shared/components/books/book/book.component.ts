import {Component, Input} from '@angular/core';
import {Doc} from "@shared/models/doc";

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [],
  templateUrl: './book.component.html',
  styleUrl: './book.component.sass'
})
export class BookComponent {
  @Input() book: Doc = {};


}
