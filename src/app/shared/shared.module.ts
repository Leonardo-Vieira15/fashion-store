import { NgModule } from "@angular/core";
import { UIModule } from "./ui/ui.module";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

@NgModule({
  imports: [
    UIModule,
    FontAwesomeModule
  ],
  exports: [
    UIModule,
    FontAwesomeModule
  ]
})
export class SharedModule {}
