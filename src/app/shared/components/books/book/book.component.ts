import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Work} from "@shared/models/work";
import {Router} from "@angular/router";
import {NgOptimizedImage} from "@angular/common";
import {WishlistService} from "@features/wishlist-page/services/wishlist/wishlist.service";
import {ToasterService} from "@core/services/toaster/toaster.service";

@Component({
  selector: 'app-book',
  standalone: true,
  templateUrl: './book.component.html',
  imports: [
    NgOptimizedImage
  ],
  styleUrl: './book.component.sass'
})
export class BookComponent implements OnInit, OnChanges {

  @Input() book!: Work;
  @Input() page: string = 'landing'
  cover = 'https://placehold.co/400x600';

  constructor(private router: Router, private wishlistService: WishlistService,
              private toasterService: ToasterService) {
  }


  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes?.['book']) {
      this.setCover()
    }

  }

  setCover() {
    if (this.book?.cover_id) {
      this.cover = `https://covers.openlibrary.org/b/id/${this.book?.cover_id}-M.jpg`;
    } else if (this.book?.cover) {
      this.cover = `https:${this.book?.cover}`;
    }
  }

  viewBook() {
    this.router.navigate([`/book-details${this.book?.key}`]);
  }

  viewWishList() {
    this.router.navigate([`/wishlist`]);
  }

  removeSeedFromWishlist() {
    if (confirm("Delete item from wishlist?")) {
      const payload = {
        "remove": [
          {key: this.book.key},
        ]
      }
      const sub = this.wishlistService.updateSeedList(payload).subscribe(
        {
          next: (res: any) => {

            this.toasterService.show('success', 'Item added', 'Item was added to wishlist-page successfully.');

          },
          error: (err) => {
            this.toasterService.show('error', 'Error', err.message);

          },
          complete: () => {
            sub.unsubscribe();

          },
        });
    }
  }
}
