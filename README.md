# Stationery Shop API

## Overview

This project is an Express-based application developed using TypeScript, integrating MongoDB with Mongoose to manage a Stationery Shop. The application provides functionalities for managing stationery products, processing customer orders, tracking inventory, and calculating revenue. Data integrity is ensured using Mongoose schema validation.

## Features

- **Product Management**: Allows for creating, retrieving, updating, and deleting stationery products (e.g., notebooks, pens).
- **Order Management**: Allows customers to place orders for products while updating the inventory.
- **Revenue Calculation**: Aggregates total revenue from all orders.

## Models

### 1. **Stationery Product Model**

- **name**: Name of the product (e.g., Pen, Notebook)
- **brand**: Brand of the product (e.g., Pilot, Moleskine)
- **price**: Price of the product
- **category**: Type of product, using an enum (e.g., Writing, Office Supplies, Art Supplies, Educational, Technology)
- **description**: Description of the product
- **quantity**: Quantity of the product available in stock
- **inStock**: Boolean flag indicating if the product is in stock

### 2. **Order Model**

- **email**: Customer's email address
- **product**: Reference to the ordered product
- **quantity**: Number of items ordered
- **totalPrice**: Total price (product price \* quantity)

## API Endpoints

### 1. Create a Stationery Product

- **Endpoint**: `/api/products`
- **Method**: POST

### 2. Get All Stationery Products

- **Endpoint**: `/api/products`
- **Method**: GET
- **Search Query**: `/api/products?searchTerm=category`  
  `searchTerm` can be `name`, `brand`, or `category`.

### 3. Get a Specific Stationery Product

- **Endpoint**: `/api/products/:productId`
- **Method**: GET

### 4. Update a Stationery Product

- **Endpoint**: `/api/products/:productId`
- **Method**: PUT

### 5. Delete a Stationery Product

- **Endpoint**: `/api/products/:productId`
- **Method**: DELETE

### 6. Order a Stationery Product

- **Endpoint**: `/api/orders`
- **Method**: POST

### 7. Revenue Calculation

- **Endpoint**: `/api/orders/revenue`
- **Method**: GET

---

# Inventory Management Logic

### Order Handling

- When an order is placed, reduce the quantity in the product model.
- If the inventory quantity goes to zero, set `inStock` to `false`.
