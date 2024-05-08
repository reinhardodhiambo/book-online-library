import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {ToasterService} from "@core/services/toaster/toaster.service";

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.sass'
})
export class SearchBarComponent {
  @Output() search = new EventEmitter<string>()

  constructor(private toaster: ToasterService) {
  }

  searchForm = new FormGroup({
    key: new FormControl<string>(''),
    value: new FormControl<string>(''),
  });
  searchOptions = [
    {
      name: 'Title',
      value: 'title',
    },
    {
      name: 'subject',
      value: 'subject',
    },
    {
      name: 'Author',
      value: 'author',
    },
  ]


  searchBooks() {
    if (this.searchForm.controls.key.value !== "") {
      this.search.emit(this.searchForm.controls.key.value+":"+this.searchForm.controls.value.value);
    }else {
      this.toaster.show("warning","Warning","Please select subject");
    }

  }
}
