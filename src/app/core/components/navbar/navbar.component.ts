import { Component } from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.sass'
})
export class NavbarComponent {
  showMenu = false;
  toggleNavbar(){
    this.showMenu = !this.showMenu;
  }

}
