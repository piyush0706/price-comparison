
# 🛒 Price Comparison Web App

A simple and modern **price comparison web application** built with **React + Vite + Tailwind CSS**.  
This project allows users to browse products, compare prices across different stores, and quickly find the best deal.

---

## 🔍 Overview

The goal of this project is to provide a **clean and responsive UI** where a user can:

- View a list of products
- See prices from multiple stores/platforms
- Compare prices side by side
- Sort or filter products to find the best option

This can be used as:
- A learning project for React + Tailwind
- A mini project for college
- A base for a real-world price comparison startup idea

---

## ✨ Features

- 📱 **Responsive UI** – works on desktop, tablet, and mobile
- 🔎 **Search products** by name
- 🧮 **Compare prices** across different stores
- 🧾 **Product details** – name, category, brand, price, rating (if added)
- ⏬ **Sort options** – e.g. lowest price, highest price (if implemented)
- 🎨 **Modern design** using Tailwind CSS
- ⚡ **Fast dev environment** using Vite


---

## 🧰 Tech Stack

- **Frontend:** React (Vite)
- **Styling:** Tailwind CSS
- **Build Tool:** Vite
- **Language:** JavaScript (ES6+)

---

## 📁 Folder Structure

A typical structure for this project:

```bash
price-comparison/
├─ public/
├─ src/
│  ├─ components/
│  │  ├─ Navbar.jsx
│  │  ├─ ProductCard.jsx
│  │  ├─ ComparisonTable.jsx
│  │  └─ SearchBar.jsx
│  ├─ data/
│  │  └─ products.json
│  ├─ pages/
│  │  └─ Home.jsx
│  ├─ App.jsx
│  └─ main.jsx
├─ index.html
├─ package.json
├─ tailwind.config.js
├─ postcss.config.js
├─ vite.config.js
└─ README.md
````


---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/piyush0706/price-comparison.git
cd price-comparison
```

### 2. Install dependencies

Make sure you have **Node.js** and **npm** installed.

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Vite will show you a **local URL** (like `http://localhost:5173`).
Open it in your browser to view the app.

---

## 🧪 How It Works (Functionality)

1. The app loads a list of products (either from a JSON file or hardcoded data in the code).
2. Each product may have:

   * Name
   * Category (e.g., Phone, Laptop, Headphones)
   * Prices from different stores/platforms
3. The user can:

   * **Search** for a product by name
   * **Scroll** through the product list
   * **Compare** the prices shown for each product
4. Optionally, you can add:

   * Sort by lowest price
   * Filters by category
   * “View more details” for each product

---

## 📦 Scripts (from `package.json`)

Common scripts:

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint the project (if ESLint is configured)
npm run lint
```

---

## 📝 Future Improvements

Possible features to add:

* 🏬 Real API integration with Amazon/Flipkart/etc. (for now, keep dummy data)
* ⭐ Add product ratings and reviews
* 🏷️ Add filters (by category, brand, price range)
* 💾 Save favorite products using local storage
* 🌙 Dark mode

---

## 🙌 Contribution



We welcome contributions!

1. Fork this repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Make your changes.
4. Test your changes.
5. Commit with a meaningful message.
6. Push to your fork and open a Pull Request.

Please follow the project's coding style and structure.



