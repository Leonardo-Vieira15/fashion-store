import { Component, HostBinding, Input } from '@angular/core';
import { Category } from '../../../../shared/models/category.model';

@Component({
  selector: 'category-section',
  templateUrl: './section.component.html',
  styleUrl: './section.component.scss'
})
export class SectionComponent {
  @HostBinding('style.height')
  @Input() size: string = "400px";

  @Input() category!: Category;
}
