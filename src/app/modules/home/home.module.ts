import { NgModule } from "@angular/core";
import { HomePageComponent } from "./feature/home-page/home-page.component";
import { SharedModule } from "../../shared/shared.module";
import { SectionComponent } from './ui/section/section.component';
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [HomePageComponent, SectionComponent],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class HomeModule {}
