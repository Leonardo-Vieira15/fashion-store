import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShopItem } from '../../../../shared/models/shop-item.model';

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrl: './shop-page.component.scss'
})
export class ShopPageComponent {
  shopItems: ShopItem[] = [];
  public category: string = 'none';

  constructor(
    private activatedRoute: ActivatedRoute
  ) {
    const cat: string | null = this.activatedRoute.snapshot.paramMap.get('category');

    if(cat != null) this.category = cat;

    const shopItem = new ShopItem();
    shopItem.img = 'item1.png';
    shopItem.description = 'PMA123 PMA PMA123 PMA PMA123 PMA PMA123 PMA PMA123 PMA PMA123 PMA PMA123 PMA PMA123 PMA PMA123 PMA';
    shopItem.title = 'White Shirt';
    shopItem.price = {
      amount: 41,
      currency: 'EUR'
    };

    this.shopItems = Array(40).fill(shopItem);
  }
}
