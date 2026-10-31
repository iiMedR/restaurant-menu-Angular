import { Component, input, output } from '@angular/core';
import { MenuItem } from '../../models/menu-item';

@Component({
  imports: [],
  selector: 'app-menu-card',
  styleUrl: './menu-card.css',
  templateUrl: './menu-card.html',
})
export class MenuCard {
  item = input.required<MenuItem>();

  itemSelected = output<MenuItem>();

  select(): void{
    this.itemSelected.emit(this.item());
  }
}
