# 🎨 Ziggurats – Animated Art Commerce Experience

Ziggurats is a multi-page art commerce web application that simulates the complete journey of purchasing an artwork — from browsing to final delivery.

This project was built as a test-case scenario to demonstrate routing, structured order flow, and animation-driven storytelling using modern frontend technologies.

---

## 🚀 Project Overview

The application guides users through a realistic purchase flow:

1. Browse artworks (Paintings & Sculptures)
2. View individual product details
3. Purchase confirmation
4. Packing animation (box/carton based on product type)
5. Shipping stage
6. Delivery confirmation

Each stage exists as a separate route to reflect a real-world multi-page commerce experience rather than a single scroll-only page.

---

## 🛠️ Tech Stack

- Next.js (App Router)
- React (Functional Components)
- TypeScript
- Tailwind CSS
- GSAP + ScrollTrigger

---

## 🧱 Application Routes

- `/` – Homepage (Gallery Landing Page)
- `/paintings` – Paintings Collection
- `/sculptures` – Sculptures Collection
- `/product/[id]` – Product Detail Page
- `/cart` – Cart Page
- `/checkout` – Order Confirmation
- `/order/packed` – Packing Animation
- `/order/shipped` – Shipping Animation
- `/order/delivered` – Delivery Confirmation

---

## ✨ Features

- Multi-page architecture using Next.js App Router
- Smooth route-based navigation
- Scroll-triggered animations using GSAP
- Conditional packing logic:
  - Sculptures → Packed in box
  - Paintings → Packed in carton
- Dedicated order lifecycle pages
- Responsive modern UI
- Clean and modular component structure

---

## 📦 Installation

```bash
npm install
npm run dev
```
Then open:

http://localhost:3000

# 📌 Notes

This project simulates an order workflow and does not include real payment integration.

The focus is on frontend architecture, routing logic, and animation flow.

Built as part of an assignment demonstrating structured navigation and visual storytelling.
