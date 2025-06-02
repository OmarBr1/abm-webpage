# ABM BeeVenom Webpage

![ABM BeeVenom Logo](./public/logo_transparent.svg)

A responsive, multi‐section React website showcasing **ABM BeeVenom**, a local‐innovation apiculture business in Algeria. This project includes a sticky navigation bar, hero/banner section, values/services sections, contact form, and a footer—styled with a bee-and-hexagon theme.

---

## Table of Contents

1. [About The Project](#about-the-project)  
2. [Demo / Screenshot](#demo--screenshot)  
3. [Built With](#built-with)  
4. [Features](#features)  
5. [Getting Started](#getting-started)  
   - [Prerequisites](#prerequisites)  
   - [Installation](#installation)  
   - [Running Locally](#running-locally)  
   - [Building for Production](#building-for-production)  
6. [Folder Structure](#folder-structure)  
7. [Customization](#customization)  
8. [Contributing](#contributing)  
9. [License](#license)  
10. [Contact](#contact)  

---

## About The Project

The **ABM BeeVenom Webpage** is a clean, modern front‐end for an Algerian apiculture company that specializes in bee-venom extraction. The goals are to:

- Highlight the company’s mission, values, and innovation in bee-venom collection.  
- Showcase services and product details in a visually engaging way.  
- Provide an easy, responsive navigation experience on desktop and mobile.  
- Offer a contact form for potential clients to request information or quotes.

All components are built in **React** with simple CSS (or CSS Modules) and leverage iconography from **lucide-react**. The site is fully responsive—collapsing the navigation into a “hamburger” menu on narrower viewports, animating content entrances, and adding bee-themed background patterns.

---

## Demo / Screenshot

> Below is a representative screenshot of the homepage (hero section + navbar).  
> *Replace with your own up-to-date screenshot or link to a live demo if available.*

![Homepage Preview](./screenshots/homepage_preview.png)

---

## Built With

- [React](https://reactjs.org/) (17+ or v18)  
- [Vite](https://vitejs.dev/) or [Create React App](https://create-react-app.dev/) (whichever scaffolding was used)  
- [lucide-react](https://lucide.dev/) (for SVG icons)  
- Plain CSS (with optional CSS Modules)  
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/) (for package management)

---

## Features

- **Responsive Navbar**  
  - Sticky header with logo on the left, menu links in the center/right, and a “Contactez-nous” call-to-action.  
  - Collapsible “hamburger” menu on mobile (≤ 768px).

- **Hero Section**  
  - Animated heading/subheading that slides/fades in on load.  
  - Bee logo with floating animation and a “Discover Our World” scroll prompt.

- **Background / Theming**  
  - Hexagon-pattern background with bees scattered throughout—generating a subtle, branded feel behind content.  
  - Bee-and-yellow (#f59e0b) color palette throughout buttons, headings, and icons.

- **Footer Component**  
  - Three-column layout (“À Propos,” “Contactez-nous,” “Liens Rapides”).  
  - Contact info with phone, email, website link, and address.  
  - Bottom bar with copyright.

- **Accessibility & SEO**  
  - Meaningful `alt` text on images.  
  - Keyboard-focus outlines on interactive elements.  
  - `<meta name="theme-color" content="#f59e0b" />` for mobile Chrome theming.

---

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- **Node.js** (v14 or later) and **npm** (v6+) or **Yarn**.  
  ```bash
  node --version
  npm --version
  # or
  yarn --version
