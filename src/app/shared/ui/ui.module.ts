import { NgModule } from "@angular/core";
import { NavbarComponent } from './navbar/navbar.component';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { ShopItemComponent } from './shop-item/shop-item.component';

@NgModule({
  declarations: [
    NavbarComponent,
    ShopItemComponent
  ],
  imports: [
    FontAwesomeModule
  ],
  exports: [
    NavbarComponent,
    ShopItemComponent
  ]
})
export class UIModule {}
