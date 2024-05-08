import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from "@core/components/navbar/navbar.component";
import {Toast} from "@core/interfaces/toast.interface";
import {ToasterService} from "@core/services/toaster/toaster.service";
import {ToasterComponent} from "@core/components/toaster/toaster.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, ToasterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent {
  title = 'book-online-library';
  protected readonly onload = onload;
  toasts: Toast[] = [];
  constructor(private toaster: ToasterService) {}

  ngOnInit() {
    this.toaster.toast$
      .subscribe(toast => {
        this.toasts = [toast, ...this.toasts];
        setTimeout(() => this.toasts.pop(), toast.delay || 6000);
      });
  }

  remove(index: number) {
    this.toasts = this.toasts.filter((v, i) => i !== index);
    //this.toasts.splice(index, 1);
  }
}
