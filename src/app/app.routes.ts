import {Routes} from '@angular/router';
import {HomeComponent} from "@features/landing-page/components/home/home.component";
import {BookDetailComponent} from "@shared/components/books/book/book-detail/book-detail.component";
import {WishlistComponent} from "@features/wishlist-page/components/wishlist/wishlist.component";

export const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'book-details/works/:id', component: BookDetailComponent},
  {path: 'wishlist', component: WishlistComponent},
];
