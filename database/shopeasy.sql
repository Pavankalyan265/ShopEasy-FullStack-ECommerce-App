CREATE DATABASE shopeasy;

USE shopeasy;


-- USERS TABLE

CREATE TABLE users(

id INT AUTO_INCREMENT PRIMARY KEY,

name VARCHAR(100),

email VARCHAR(100),

password VARCHAR(100)

);



-- PRODUCTS TABLE

CREATE TABLE products(

id INT AUTO_INCREMENT PRIMARY KEY,

name VARCHAR(100),

price INT,

image VARCHAR(500)

);



-- CART TABLE

CREATE TABLE cart(

id INT AUTO_INCREMENT PRIMARY KEY,

product_id INT,

name VARCHAR(100),

price INT,

image VARCHAR(500)

);



-- SAMPLE PRODUCTS


INSERT INTO products
(name,price,image)

VALUES

(
'Laptop',
50000,
'https://picsum.photos/300'
),

(
'Mobile',
20000,
'https://picsum.photos/301'
),

(
'Headphones',
3000,
'https://picsum.photos/302'
);