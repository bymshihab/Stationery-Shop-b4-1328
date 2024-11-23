# API Endpoints

## Stationery Products

- **GET /products**  
  List all products.

- **POST /products**  
  Add a new product.

- **PATCH /products/:id**  
  Update product inventory or details.

---

## Orders

- **POST /orders**  
  Place an order.

- **GET /customers/:id/orders**  
  Fetch a customer’s order history.

---

## Customers

- **POST /customers**  
  Add a new customer.

- **GET /customers/:id**  
  Get customer details.

---

## Feedback

- **POST /feedback**  
  Add feedback for a product.

- **GET /products/:id/feedback**  
  Get feedback for a product.

---

## Analytics

- **GET /analytics/low-stock**  
  List low-stock products.

- **GET /analytics/popular-products**  
  List most popular products.
