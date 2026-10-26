import { Component, input } from '@angular/core';
import { MenuItem } from '../../models/menu-item';

@Component({
  imports: [],
  selector: 'app-menu-list',
  styleUrl: './menu-list.css',
  templateUrl: './menu-list.html',
})
export class MenuList {
  items = input.required<MenuItem[]>();
}
