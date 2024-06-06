import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "../../../shared/shared.module";
import { ShopPageComponent } from "./shop-page/shop-page.component";
import { ShopUIModule } from "../ui/shop-ui.module";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { ShopItemPageComponent } from './shop-item-page/shop-item-page.component';

@NgModule({
  declarations: [ShopPageComponent, ShopItemPageComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ShopUIModule,
    SharedModule
  ],
})
export class ShopModule {}
