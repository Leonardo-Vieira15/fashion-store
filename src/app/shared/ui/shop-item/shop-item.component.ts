import { Component, HostListener, Input } from '@angular/core';
import { ShopItem } from '../../models/shop-item.model';
import { Router } from '@angular/router';

@Component({
  selector: 'shop-item',
  templateUrl: './shop-item.component.html',
  styleUrl: './shop-item.component.scss'
})
export class ShopItemComponent {
  @Input() item!: ShopItem;

  constructor(
    private router: Router
  ) {

  }

  @HostListener('click', ['$event'])
  onClick(event: Event): void {
    this.router.navigateByUrl('shop/item')
  }
}
