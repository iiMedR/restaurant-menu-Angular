import { Component, input, output } from '@angular/core';
import { MenuItem } from '../../models/menu-item';
import { MenuCard } from '../menu-card/menu-card';

@Component({
  imports: [MenuCard],
  selector: 'app-menu-list',
  styleUrl: './menu-list.css',
  templateUrl: './menu-list.html',
})
export class MenuList {
  items = input.required<MenuItem[]>();

  itemSelected = output<MenuItem>();

  onItemSelected(item: MenuItem): void{
    this.itemSelected.emit(item)
  }
}
