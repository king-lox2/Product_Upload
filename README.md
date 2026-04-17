# 📦 Product Upload App

A clean and user-friendly mobile application built with **React Native (Expo)** that allows users to upload and manage up to **5 products** with images, names, and prices.

---

## 🚀 Features

* 📸 Upload product images from device gallery
* ➕ Add product (name, price, image)
* 🔢 Product limit enforcement (max: 5)
* 🚫 Disabled button when limit is reached
* 🗑️ Delete products
* 💾 Persistent storage using AsyncStorage
* ⚡ Smooth animations with Reanimated
* 📊 Real-time product count (e.g., 3/5)
* 📦 Empty state UI for better UX
* ⏳ Loading feedback on actions

---

## 📱 Screenshots

### 🏠 Home Screen (Empty State)

![Empty State](./assets/empty-state.png)

### ➕ Add Product

![Add Product](./assets/add-product.png)

### 📦 Product List

![Product List](./assets/product-list.png)

---

## 🧠 Tech Stack

* **React Native (Expo)**
* **Context API** (State Management)
* **AsyncStorage** (Persistence)
* **Expo Image Picker**
* **React Native Reanimated**

---

## 🏗️ Architecture

The app follows a **clean and scalable structure**:

* `context/` → Global state management
* `components/` → Reusable UI components
* `screens/` → Main UI screens

This separation improves **maintainability and scalability**.

---

## 🎯 Key UX Decisions

* Clear product limit visibility (`3/5`)
* Disabled actions when constraints are met
* Immediate feedback using alerts and loaders
* Simple and intuitive UI layout
* Helpful empty state for onboarding

---

## ⚙️ Setup & Installation

```bash
npm install
npx expo start
```

---

## 🧪 Future Improvements

* ✏️ Edit product feature
* ☁️ Backend integration (Firebase / Node.js)
* 🔄 Drag & reorder products
* 🎨 Advanced animations
* 🔍 Search & filtering

---

## 📌 Conclusion

This project demonstrates strong understanding of:

* Mobile UI/UX principles
* State management with Context API
* Handling real-world constraints (limits, persistence)
* Writing clean, maintainable React Native code

---

## 👨‍💻 Author

Your Name
GitHub: https://github.com/your-username
