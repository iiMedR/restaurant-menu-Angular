import { Component, input, output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-menu-filters',
  styleUrl: './menu-filters.css',
  templateUrl: './menu-filters.html',
})
export class MenuFilters {
  categories = input.required<string[]>();
  selectedCategory = input.required<string>();

  categorySelected = output<string>();

  select(category: string): void {
    this.categorySelected.emit(category)
  }

  reset(category: string): void {
    this.categorySelected.emit('All')
  }
}
