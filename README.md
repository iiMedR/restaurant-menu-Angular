# The Green Table — Restaurant Menu

A responsive restaurant menu built with Angular and TypeScript. Browse dishes, combine category filters with text search, and view details for a selected dish. Prices are displayed in Moroccan dirhams (MAD).

This learning project explores standalone components, signals, computed state, and communication between components. Menu data lives in the frontend; no backend or database is required.

## Features

- Browse Main Dishes, Starters, Desserts, and Drinks, or view all categories.
- Search dish names and descriptions with case-insensitive matching.
- Combine search and category filters, or reset both.
- Open a dish's details below the menu and close them when finished.
- Highlight the selected dish and clear the selection when filters change.
- Show availability and premium labels; disable details for unavailable dishes.
- Adapt the menu grid to smaller screens.

## Tech stack

- Angular 22 with standalone components
- TypeScript 6
- Angular `signal`, `computed`, `input`, and `output` APIs
- Built-in `@if` and `@for` template control flow
- HTML and CSS
- Angular CLI and Vitest tooling

## Run locally

### Prerequisites

Use a Node.js version supported by the installed Angular CLI: `^22.22.3`, `^24.15.0`, or `>=26.0.0`. Node.js 24.15 or newer within the 24.x release line is one suitable option. The project specifies npm 11.19.1 as its package manager.

### Installation

```bash
git clone https://github.com/iiMedR/restaurant-menu-Angular.git
cd restaurant-menu-Angular
npm ci
npm start
```

Open [http://localhost:4200](http://localhost:4200). The development server reloads the page when source files change.

## Build and preview

Create an optimized production build:

```bash
npm run build
```

The deployable files are generated in `dist/restaurant-menu/browser/`.

To preview that build from the project root:

```bash
npx serve dist/restaurant-menu/browser
```

Open the localhost URL printed in the terminal. The preview command may prompt to download the `serve` package on first use.

**Serve the build over HTTP.** Double-clicking `index.html` opens a `file://` URL, where browser restrictions and asset paths can prevent Angular's JavaScript modules from loading.

To deploy, upload the contents of `dist/restaurant-menu/browser/` to a static website host. No Node.js application server is needed for the deployed site.

## Available commands

| Command | Purpose |
| --- | --- |
| `npm start` | Start the development server. |
| `npm run build` | Generate the production build. |
| `npm run watch` | Rebuild in development mode when files change. |
| `npm test` | Run the configured unit-test runner. |
| `npm run ng -- <command>` | Run an Angular CLI command. |

## Component architecture

```text
App
├── MenuFilters
├── MenuList
│   └── MenuCard (one per dish)
└── MenuDetails (shown when a dish is selected)
```

| Component | Responsibility |
| --- | --- |
| `App` | Owns menu data, category/search state, the computed filtered list, and the selected dish. |
| `MenuFilters` | Displays search and category controls and emits user changes. |
| `MenuList` | Renders cards and forwards dish-selection events to App. |
| `MenuCard` | Displays one dish, emits selection events, and highlights itself when selected. |
| `MenuDetails` | Displays the selected dish and emits a close event. |

Data flows **down through inputs**, while user actions flow **up through outputs**:

```text
Selection: MenuCard → MenuList → App updates selectedItem
Highlight: App → MenuList → MenuCard receives selectedId
Filtering: MenuFilters → App updates filters and clears selectedItem
Closing:   MenuDetails → App clears selectedItem
```

## Project structure

```text
src/
├── app/
│   ├── components/
│   │   ├── menu-card/
│   │   ├── menu-details/
│   │   ├── menu-filters/
│   │   └── menu-list/
│   ├── models/
│   │   └── menu-item.ts
│   ├── app.ts
│   ├── app.html
│   ├── app.css
│   └── app.config.ts
├── main.ts
└── styles.css
```

## Customize the menu

Edit the `menuItams` array in `src/app/app.ts` to add or update dishes. Each entry follows the `MenuItem` interface:

```ts
{
  id: 6,
  name: 'Vegetable Soup',
  description: 'Seasonal vegetables in a warm broth.',
  price: 30,
  category: 'Starters',
  available: true,
}
```

Use a unique ID for each dish. If you introduce a new category, also add it to the `categories` array in App. Update `restaurantName` to change the restaurant heading.

The menu is currently hardcoded, and selections and filters reset when the page reloads. Ordering, payments, and persistent storage are outside the current project's scope.
