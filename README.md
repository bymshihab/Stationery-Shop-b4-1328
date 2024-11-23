Stationery Shop API
Overview
This project is an Express-based application developed using TypeScript, integrating MongoDB with Mongoose to manage a Stationery Shop. The application handles operations for both stationery products and customer orders, with data integrity ensured through Mongoose schema validation.

Features
Product Management: Create, retrieve, update, and delete stationery products (e.g., notebooks, pens).
Order Management: Allows customers to place orders for products, with inventory tracking and updates.
Revenue Calculation: Aggregates total revenue from all orders.
Models

1. Stationery Product Model
   name: Product name (e.g., Pen, Notebook)
   brand: Product brand (e.g., Pilot, Moleskine)
   price: Product price
   category: Enum for product type (Writing, Office Supplies, Art Supplies, Educational, Technology)
   description: Product description
   quantity: Available stock
   inStock: Boolean flag for stock availability
2. Order Model
   email: Customer's email address
   product: Reference to the ordered product
   quantity: Number of items ordered
   totalPrice: Total price (product price \* quantity)
   API Endpoints
3. Create a Stationery Product
   Endpoint: /api/products
   Method: POST
   Request: Product details (name, brand, price, category, description, quantity, inStock)
   Response: Success message with created product details
4. Get All Stationery Products
   Endpoint: /api/products
   Method: GET
   Query: Filter by search term (name, brand, category)
   Response: List of products matching the filter
5. Get a Specific Stationery Product
   Endpoint: /api/products/:productId
   Method: GET
   Response: Details of a specific product by ID
6. Update a Stationery Product
   Endpoint: /api/products/:productId
   Method: PUT
   Request: Updated product details (e.g., price, quantity)
   Response: Success message with updated product details
7. Delete a Stationery Product
   Endpoint: /api/products/:productId
   Method: DELETE
   Response: Success message confirming product deletion
8. Order a Stationery Product
   Endpoint: /api/orders
   Method: POST
   Request: Order details (email, productId, quantity, totalPrice)
   Response: Success message confirming the order
9. Calculate Total Revenue from Orders
   Endpoint: /api/orders/revenue
   Method: GET
   Response: Total revenue calculated from all orders
   Error Handling
   All API responses include detailed error messages in case of validation failures or other issues. The error response includes:

message: A brief error message
success: Set to false for errors
error: Detailed error message or object
stack: Stack trace for debugging
Setup Instructions
Clone the repository.
Install dependencies: npm install
Set up MongoDB and configure the connection.
Run the application: npm run dev or npm start

## Endpoints

### 1. Create a Stationery Product

**Endpoint:**  
`POST /api/products`  
**Description:**  
Create a new stationery product in the inventory.

---

### 2. Get All Stationery Products

**Endpoint:**  
`GET /api/products`  
**Description:**  
Fetch all stationery products in the inventory.

**Optional Search:**  
`GET /api/products?searchTerm=<searchTerm>`  
Search by `name`, `brand`, or `category`.

---

### 3. Get a Specific Stationery Product

**Endpoint:**  
`GET /api/products/:productId`  
**Description:**  
Fetch a specific stationery product by its `productId`.

---

### 4. Update a Stationery Product

**Endpoint:**  
`PUT /api/products/:productId`  
**Description:**  
Update details of a specific stationery product by `productId`.

---

### 5. Delete a Stationery Product

**Endpoint:**  
`DELETE /api/products/:productId`  
**Description:**  
Delete a specific stationery product from the inventory by `productId`.

---

### 6. Order a Stationery Product

**Endpoint:**  
`POST /api/orders`  
**Description:**  
Place an order for a stationery product.

---

## Inventory Management Logic

- When an order is placed, **reduce the quantity** in the product model.
- If the inventory quantity reaches **zero**, set `inStock` to `false`.

---

### 7. Calculate Revenue from Orders

**Endpoint:**  
`GET /api/orders/revenue`  
**Description:**  
Calculate the total revenue generated from all orders in the system.

---
