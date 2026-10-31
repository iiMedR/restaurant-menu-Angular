import { Component, input, output } from '@angular/core';
import { MenuItem } from '../../models/menu-item';

@Component({
  imports: [],
  selector: 'app-menu-details',
  styleUrl: './menu-details.css',
  templateUrl: './menu-details.html',
})
export class MenuDetails {
  item = input.required<MenuItem>();

  closed = output<void>();

  close(): void {
    this.closed.emit();
  }
}
