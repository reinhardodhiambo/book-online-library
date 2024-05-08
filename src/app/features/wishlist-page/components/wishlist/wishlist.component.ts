import {Component, OnInit} from '@angular/core';
import {BooksComponent} from "@shared/components/books/books.component";
import {Work} from "@shared/models/work";
import {SubjectParam} from "@features/landing-page/interfaces/subject-param";
import {SubjectSearchResponse} from "@shared/models/subject-search-response";
import {WishlistService} from "@features/wishlist-page/services/wishlist/wishlist.service";

@Component({
  selector: 'app-wishlist-page',
  standalone: true,
  imports: [
    BooksComponent
  ],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.sass'
})
export class WishlistComponent implements OnInit{

  books!: Work[];
  loading: boolean = false;

  constructor(private wishlistService: WishlistService) {

  }
  ngOnInit(): void {
    this.getWishlists();
  }
  getWishlists(){
    this.loading = true;
    let data: SubjectParam = {
      limit: 9,
    };
    const sub = this.wishlistService
      .getWishList(data)
      .subscribe({
        next: (res: any) => {
          this.books = res.entries?.map((data: any)=>{
            return {
              cover: data?.picture?.url,
              title: data.title,
              key: data.url
            }
          }) || [];
          this.loading = false;
        },
        error: (err) => {
          console.log(err);
          this.loading = false;
        },
        complete: () => {
          sub.unsubscribe();
          this.loading = false;
        },
      })

  }

}
