import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Toast} from "@core/interfaces/toast.interface";

@Component({
  selector: 'app-toaster',
  standalone: true,
  imports: [],
  templateUrl: './toaster.component.html',
  styleUrl: './toaster.component.sass'
})
export class ToasterComponent {
  @Input() toast!: Toast;
  @Input() i!: number;

  @Output() remove = new EventEmitter<number>();
}
