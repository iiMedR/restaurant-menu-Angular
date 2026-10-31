import { Component, signal, computed } from '@angular/core';
import { MenuItem } from './models/menu-item';
import { MenuList } from './components/menu-list/menu-list';
import { MenuFilters } from './components/menu-filters/menu-filters';
import { MenuDetails } from './components/menu-details/menu-details';

@Component({
  imports: [MenuList, MenuFilters, MenuDetails],
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

  categories: string[] = [
    'All',
    'Main Dishes',
    'Starters',
    'Desserts',
    'Drinks'
  ]

  selectedCategory = signal<string>('All')

  selectCategory(category: string): void {
    this.selectedCategory.set(category);
    this.selectedItem.set(null);
  }

  /*filteredItems = computed(() => {
    const selected = this.selectedCategory();

    if(selected === 'All'){
      return this.menuItams;
    }

    return this.menuItams.filter(
      item => item.category === selected
    )
  })*/

  searchText = signal<string>('');

  updateSearch(text: string): void{
    this.searchText.set(text)
    this.selectedItem.set(null);
  }

  filteredItems = computed(() => {
    const category = this.selectedCategory();
    const searchTitle = this.searchText().trim().toLowerCase();
    const searchDescription = this.searchText().trim().toLowerCase();

      if(category === 'All' && searchTitle === '' && searchDescription === ''){
        return this.menuItams;
      }

    return this.menuItams.filter(item => {

      const matchesCategory = category === 'All' || item.category === category;

      const matchesSearch = item.name.toLowerCase().includes(searchTitle) || item.description.toLowerCase().includes(searchDescription)

      return matchesCategory && matchesSearch
    })
  })

  selectedItem = signal<MenuItem | null>(null);
  selectItem(item: MenuItem): void{
    this.selectedItem.set(item)
  }

  closeDetails(): void{
    this.selectedItem.set(null)
  }
}
