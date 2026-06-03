# 🛒 ShopEasy - Full Stack E-Commerce Learning Project

## 📌 About Project

ShopEasy is a full stack e-commerce web application created for learning and improving practical web development skills.

This project covers frontend development, backend API creation, database connectivity, and basic CRUD operations using modern web technologies.

The main purpose of this project is to understand how a real-world application flow works from user interface to database.

---

## 🎯 Project Goals

- Learn React JS component-based development
- Understand frontend and backend communication
- Create REST APIs using Node JS and Express
- Connect application with MySQL database
- Practice CRUD operations
- Learn project folder structure
- Improve GitHub and resume project skills

---

# 🚀 Features Implemented

## User Module

- User Registration
- User Login
- Basic Authentication Flow
- Store user details in MySQL database


## Product Module

- Display product list
- Search products
- Fetch products from backend API
- Show product details


## Cart Module

- Add products into cart
- View cart products
- Remove products from cart


## UI Features

- Responsive layout
- Navigation bar
- Product cards
- Forms
- Bootstrap styling


---

# 🛠 Technology Stack

## Frontend

- React JS
- JavaScript
- HTML5
- CSS3
- Bootstrap
- Axios
- React Router DOM


Concepts Practiced:

- Components
- Props
- Hooks
- useState
- useEffect
- Routing
- API Integration


---

## Backend

- Node JS
- Express JS


Concepts Practiced:

- Server creation
- REST API development
- Routing
- Middleware
- Request & Response handling


---

## Database

- MySQL


Concepts Practiced:

- Database creation
- Tables
- Insert queries
- Select queries
- Delete operations
- Database connection


---

# 📂 Folder Structure


```text
ShopEasy

├── frontend

│   ├── src

│   ├── components

│   │       Navbar.jsx
│   │       ProductCard.jsx
│   │       Footer.jsx

│   ├── pages

│   │       Home.jsx
│   │       Products.jsx
│   │       Login.jsx
│   │       Register.jsx
│   │       Cart.jsx

│   ├── App.js
│   └── index.js


├── backend

│   ├── config

│   │      db.js

│   ├── routes

│   │      userRoutes.js
│   │      productRoutes.js
│   │      cartRoutes.js

│   └── server.js


└── database

    shopeasy.sql

```

---

# ⚙️ Installation and Setup


## Clone Project


```bash
git clone repository-url
```


---

# Frontend Setup


Go to frontend:


```bash
cd frontend
```


Install dependencies:


```bash
npm install
```


Run React:


```bash
npm start
```


Frontend URL:


```text
http://localhost:3000
```


---

# Backend Setup


Go backend:


```bash
cd backend
```


Install packages:


```bash
npm install
```


Start backend:


```bash
node server.js
```


Backend URL:


```text
http://localhost:5000
```


---

# Database Setup


Create Database:


```sql
CREATE DATABASE shopeasy;

USE shopeasy;
```


---

## Users Table


```sql
CREATE TABLE users(

id INT AUTO_INCREMENT PRIMARY KEY,

name VARCHAR(100),

email VARCHAR(100),

password VARCHAR(100)

);
```


---

## Products Table


```sql
CREATE TABLE products(

id INT AUTO_INCREMENT PRIMARY KEY,

name VARCHAR(100),

price INT,

image VARCHAR(500)

);
```


---

## Cart Table


```sql
CREATE TABLE cart(

id INT AUTO_INCREMENT PRIMARY KEY,

product_id INT,

name VARCHAR(100),

price INT,

image VARCHAR(500)

);
```


---

# API Endpoints Learned


## Products API


Get products:


```http
GET /products
```


Purpose:

Fetch all products from database.


---

## User APIs


Register:


```http
POST /users/register
```


Login:


```http
POST /users/login
```


---

## Cart APIs


Add product:


```http
POST /cart/add
```


View cart:


```http
GET /cart
```


Remove item:


```http
DELETE /cart/:id
```


---

# Learning Outcomes


After completing this project I practiced:


✔ Building React applications

✔ Creating reusable components

✔ Managing state using hooks

✔ Connecting frontend with backend

✔ Creating REST APIs

✔ Working with MySQL database

✔ Understanding full stack application flow


---

# Future Improvements


Planned upgrades:


- JWT authentication
- Password encryption
- Admin panel
- Product upload
- Order management
- Payment integration
- Deployment


---

# Developer

**Pavan**

Learning Full Stack Development

Skills Practiced:

HTML | CSS | Bootstrap | JavaScript | React JS | Node JS | Express JS | MySQL
