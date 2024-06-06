import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "../../../shared/shared.module";
import { FiltersComponent } from "./filters/filters.component";

@NgModule({
  declarations: [
    FiltersComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [FiltersComponent]
})
export class ShopUIModule {

}
