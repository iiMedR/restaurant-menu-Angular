import { Component, signal } from '@angular/core';
import { MenuItem } from './models/menu-item';
import { MenuList } from './components/menu-list/menu-list';

@Component({
  imports: [MenuList],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  restaurantName = 'The Green Table';

  menuItams: MenuItem[] = [
        {
      id: 1,
      name: 'Margherita Pizza',
      description: 'Tomato sauce, mozzarella and basil.',
      price: 65,
      category: 'Main Dishes',
      available: true,
    },
    {
      id: 2,
      name: 'Caesar Salad',
      description: 'Lettuce, parmesan, croutons and Caesar dressing.',
      price: 42,
      category: 'Starters',
      available: true,
    },
    {
      id: 3,
      name: 'Chocolate Cake',
      description: 'Rich chocolate cake with chocolate sauce.',
      price: 35,
      category: 'Desserts',
      available: true,
    },
    {
      id: 4,
      name: 'Fresh Lemonade',
      description: 'Fresh lemon juice with mint.',
      price: 20,
      category: 'Drinks',
      available: false,
    },
    {
      id: 5,
      name: 'Tea',
      description: 'Hot tea with mint.',
      price: 17,
      category: 'Drinks',
      available: true,
    }
  ]
}
