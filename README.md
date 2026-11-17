# Mpho’s Food Corner

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React 19" />
  <img src="https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite 7" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=111111" alt="JavaScript" />
  <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white" alt="Axios" />
</p>

<p align="center">
  <strong>Discover the menu, place an order, and enjoy every bite.</strong>
</p>

Mpho’s Food Corner is a responsive food ordering and restaurant management web application built with React and Vite. It provides a customer-facing menu and ordering experience alongside dedicated tools for managing menu items and orders.

The project connects a polished frontend with API services for authentication, image uploads, customer orders, and administration.

## Live Repository

- **GitHub:** https://github.com/KM-CODES23/mphos_food_corner
- **Default branch:** `main`

> A public homepage URL has not been configured in the repository metadata yet.

## Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Website Pages](#website-pages)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [API and Image Services](#api-and-image-services)
- [Application State](#application-state)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)

## Overview

Mpho’s Food Corner is designed around two main experiences:

### Customers

Customers can explore the restaurant website, browse menu options, register or sign in, manage a shopping cart, and review their orders.

### Administrators

Administrators have dedicated routes for updating the menu and reviewing or managing customer orders.

The application uses React Router for page navigation and stores the authenticated user in `localStorage`, allowing the navbar and user experience to persist after a refresh.

## Key Features

### Customer Experience

- browse the restaurant homepage
- view an organized food menu
- add menu items to the shopping cart
- view customer orders
- create an account
- sign in to an existing account
- explore About and Contact pages

### Restaurant Administration

- view and manage all customer orders
- create or update menu items
- upload menu images
- manage restaurant menu content

### Interface

- responsive React layout
- reusable navbar and footer
- route-based navigation
- menu category components
- custom image upload component
- mobile-friendly CSS styling

## Website Pages

| Route | Page | Purpose |
|---|---|---|
| `/` | Homepage | Introduces the restaurant and highlights key content |
| `/menu` | Menu | Displays available food and menu categories |
| `/cart` | Cart | Allows customers to review selected items |
| `/orders` | Orders | Shows customer orders |
| `/login` | Login | Authenticates an existing user |
| `/signup` | Signup | Creates a customer account |
| `/admin/orders` | Admin Orders | Restaurant order management |
| `/admin/menu` | Admin Menu | Menu item management |
| `/contact` | Contact | Restaurant contact information |
| `/about` | About | Restaurant story and information |

## Tech Stack

### Frontend

- React 19
- React Router 7
- Vite 7
- JavaScript ES modules
- CSS
- Axios

### UI and Icons

- React Icons
- Bootstrap Icons

### Development Tools

- ESLint
- npm
- Vite plugin for React

## Project Structure

```text
mphos_food_corner/
├── public/
│   └── vite.svg
├── src/
│   ├── api/
│   │   ├── uploadImage.js
│   │   └── userService.js
│   ├── assets/
│   │   ├── menu/
│   │   ├── img_1.jpg
│   │   ├── img_2.jpg
│   │   ├── img_3.jpg
│   │   ├── logo.jpg
│   │   └── react.svg
│   ├── components/
│   │   ├── Categories.jsx
│   │   ├── Footer.jsx
│   │   ├── ImageUploader.jsx
│   │   └── Navbar.jsx
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── AdminMenu.jsx
│   │   ├── AdminOrders.jsx
│   │   ├── CartPage.jsx
│   │   ├── Contact.jsx
│   │   ├── Homepage.jsx
│   │   ├── Login.jsx
│   │   ├── Menupage.jsx
│   │   ├── OrdersPage.jsx
│   │   └── Signup.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   ├── main.jsx
│   └── styles.css
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

## Getting Started

### Prerequisites

Install:

- [Node.js](https://nodejs.org/) 18 or newer
- npm

### Clone the Repository

```bash
git clone https://github.com/KM-CODES23/mphos_food_corner.git
cd mphos_food_corner
```

### Install Dependencies

```bash
npm install
```

### Start the Development Server

```bash
npm run dev
```

Vite will print a local URL in the terminal. It is commonly:

```text
http://localhost:5173
```

### Create a Production Build

```bash
npm run build
```

The production files are generated in the `dist` directory.

### Preview the Production Build

```bash
npm run preview
```

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the Vite development server |
| `npm run build` | Build the application for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the project |

## API and Image Services

API integration code is organized inside:

```text
src/api/
├── uploadImage.js
└── userService.js
```

### `uploadImage.js`

Contains image upload functionality used by menu management and image-related components.

### `userService.js`

Contains user-related API service logic.

Configure the relevant API base URLs or environment variables before using live backend features. This repository does not currently include a documented environment file or complete backend setup in the README.

## Application State

The main application component:

- manages the active user with React state
- reads saved user data from `localStorage`
- shares authentication state with the navbar
- provides application-wide React Router routes
- renders the navbar and footer around page content

Example stored key:

```text
localStorage["user"]
```

The saved value is parsed and restored when the application loads.

## Source Assets

The project includes restaurant and menu imagery in:

```text
src/assets/
```

Key assets include:

- `logo.jpg`
- `img_1.jpg`
- `img_2.jpg`
- `img_3.jpg`
- menu image resources

## Roadmap

Potential future improvements:

- add environment-based API configuration
- add protected routes for customer and administrator areas
- add server-side authentication and authorization
- improve menu filtering and search
- add cart persistence
- add payment integration
- add order status tracking
- add automated tests
- add loading and empty-state designs
- improve mobile navigation and accessibility
- deploy the production website

## Contributing

1. Fork the repository
2. Create a new feature branch:

```bash
git checkout -b feature/your-feature-name
```

3. Make and test your changes
4. Commit the changes:

```bash
git add .
git commit -m "Add your feature description"
```

5. Push the branch:

```bash
git push origin feature/your-feature-name
```

6. Open a pull request

## License

No license is currently included in this repository. Add a `LICENSE` file before reusing or distributing the project publicly under an explicit license.

## Author

**KM-CODES23**

- GitHub: https://github.com/KM-CODES23
- Repository: https://github.com/KM-CODES23/mphos_food_corner
