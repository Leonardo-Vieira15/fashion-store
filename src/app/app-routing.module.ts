import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/home/feature/home-shell/home-shell.module').then(m => m.HomeShellModule)
  },
  {
    path: 'shop',
    loadChildren: () => import('./modules/shop/feature/shop-shell/shop-shell.module').then(m => m.ShopShellModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
