# Bosla - E-Commerce Platform

A modern, animated e-commerce website built with HTML, CSS, and JavaScript, featuring full CRUD operations for product management.

**Live Demo:** https://gemmy404.github.io/bosla-store-crud/

## Features

### Core Functionality

-   **Product Management (CRUD)**
    -   Create new products with details (name, price, description, category, image)
    -   Read/Display all products in an organized grid layout
    -   Update existing product information
    -   Delete products from the catalog

### User Interface

-   **Home Page**

    -   Animated hero section with shopping cart illustration
    -   Smooth scroll indicator
    -   Welcoming message and brand introduction

-   **Products Section**

    -   Product cards with images and details
    -   Category badges (Furniture, Electronics, Accessories)
    -   Price display
    -   Edit and Delete action buttons
    -   Add Product form with file upload capability

-   **Statistics Page**

    -   Visual stats display showing:
        -   300 Clients
        -   135 Projects
        -   50 Countries
        -   500 Money metric
    -   Icon-based representation

-   **Footer**
    -   Company information and description
    -   Quick links (Services, About Us, Contact Us, FAQ, Privacy Policy)
    -   Contact information (address, business hours, phone numbers)
    -   Product gallery showcase
    -   Social media integration (Facebook, Twitter, YouTube)

### Design & Animations

-   Smooth animations throughout the interface
-   Responsive design for all devices
-   Clean and intuitive navigation
-   Hover effects on interactive elements

## Technologies Used

-   **HTML5** - Structure and semantic markup
-   **CSS3** - Styling, animations, and responsive design
-   **JavaScript** - CRUD operations and interactivity

## Project Structure

```
bosla/
│
├── css/
│   ├── all.min.css       # Font Awesome or icon library
│   ├── style.css         # Main stylesheet
│   └── normalize.css     # CSS reset/normalization
│
├── images/               # Product and UI images
│
├── js/
│   └── main.js          # JavaScript for CRUD operations
│
├── webfonts/            # Custom web fonts
│
├── .gitignore           # Git ignore file
├── index.html           # Main HTML file
└── README.md            # Project documentation
```

## Usage

### Adding a Product

1. Navigate to the "Add Product" section
2. Fill in the product details:
    - Product Name
    - Price
    - Description
    - Category (select from dropdown)
    - Upload product image
3. Click "Add Product" button

### Managing Products

-   **View**: All products are displayed in the products grid
-   **Edit**: Click the "Edit" button on any product card
-   **Delete**: Click the "Delete" button to remove a product

### Navigation

-   Use the top navigation bar to switch between:
    -   Products
    -   Add Product
    -   Stats

## Customization

### Animations

Animation timings and effects can be adjusted in the CSS animations section.

## Responsive Design

The website is fully responsive and optimized for:

-   Desktop (1200px and above)
-   Tablets (768px - 1199px)
-   Mobile devices (below 768px)
