import { Component } from '@angular/core';
import { ShopItem } from '../../../../shared/models/shop-item.model';
import { Category } from '../../../../shared/models/category.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  shopItem!: ShopItem;
  categories: { [key: string]: Category } = {
    WOMEN: {
      tag: 'women',
      title: 'WOMEN',
      button: {
        text: 'View More',
        action: () => {
          this.router.navigateByUrl(`shop/women`);
        }
      },
      img: 'woman.jpg'
    },
    MEN: {
      tag: 'men',
      title: 'MEN',
      button: {
        text: 'View More',
        action: () => {
          this.router.navigateByUrl('shop/men');
        }
      },
      img: 'men.jpg'
    },
    KIDS: {
      tag: 'kids',
      title: 'KIDS',
      button: {
        text: 'View More',
        action: () => {
          this.router.navigateByUrl('shop/kids');
        }
      },
      img: 'kids.jpg'
    },
    UNISEX: {
      tag: 'unisex',
      title: 'UNISEX',
      button: {
        text: 'View More',
        action: () => {
          this.router.navigateByUrl('shop/unisex');
        }
      },
      img: 'unisex.jpg'
    }
  }

  constructor(
    private router: Router
  ) {
    this.shopItem = new ShopItem();
    this.shopItem.img = 'item1.png';
    this.shopItem.description = 'PMA123 PMA PMA123 PMA PMA123 PMA PMA123 PMA PMA123 PMA PMA123 PMA PMA123 PMA PMA123 PMA PMA123 PMA';
    this.shopItem.title = 'White Shirt';
    this.shopItem.price = {
      amount: 41,
      currency: 'EUR'
    }
  }
}
