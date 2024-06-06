import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ShopPageComponent } from "../shop-page/shop-page.component";
import { ShopItemPageComponent } from "../shop-item-page/shop-item-page.component";

const routes: Routes = [
  {
    path: '',
    component: ShopPageComponent,
    loadChildren: () => import('../shop.module').then(m => m.ShopModule)
  },
  {
    path: 'item',
    component: ShopItemPageComponent,
    loadChildren: () => import('../shop.module').then(m => m.ShopModule)
  },
  {
    path: ':category',
    component: ShopPageComponent,
    loadChildren: () => import('../shop.module').then(m => m.ShopModule)
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopShellRoutingModule {}
