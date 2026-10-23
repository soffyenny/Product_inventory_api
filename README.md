# Product Inventory API

A simple RESTful API built with **Node.js** and **Express** for managing a product inventory. It supports adding, listing, editing, and deleting products. Data is stored in memory, so it resets every time the server restarts.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Testing with Postman](#testing-with-postman)
- [Known Limitations](#known-limitations)
- [Team and Contributions](#team-and-contributions)

## Features

- Add a new product
- List all products
- Edit (update) an existing product, fully or partially
- Delete a product
- JSON request and response bodies
- Returns proper HTTP status codes (`200`, `201`, `404`)

## Tech Stack

| Tool           | Purpose                           |
| -------------- | --------------------------------- |
| Node.js        | JavaScript runtime                |
| Express 5      | Web framework for routing         |
| Postman        | API testing and documentation     |
| Git and GitHub | Version control and collaboration |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- npm (comes with Node.js)
- Git

### Installation

```bash
# 1. Clone the repository
git clone <repository-url>

# 2. Move into the project folder
cd Product_inventory_api

# 3. Install dependencies
npm install

# 4. Start the server
node server.js
```

The server runs on **http://localhost:4000** by default. To use a different port, set the `port` environment variable (lowercase, as used in `server.js`):

```bash
# macOS / Linux
port=5000 node server.js

# Windows (PowerShell)
$env:port=5000; node server.js
```

When the server starts you should see:

```
Server running on http://localhost:4000
```

Visit `http://localhost:4000/` in your browser to confirm it is running. You should see `Product Inventory API is running!`.

## Project Structure

```
Product_inventory_api/
├── server.js                                          # Express app and all routes
├── package.json                                       # Project metadata and dependencies
├── package-lock.json                                  # Locked dependency versions
├── Product inventory team 2 Tests.postman_collection.json   # Exported Postman collection
├── .gitignore                                         # Ignores node_modules and .DS_Store
└── README.md                                          # Project documentation
```

## API Endpoints

**Base URL:** `http://localhost:4000`

| Method | Endpoint        | Description                |
| ------ | --------------- | -------------------------- |
| GET    | `/`             | Health check               |
| GET    | `/products`     | List all products          |
| POST   | `/products`     | Add a new product          |
| PUT    | `/products/:id` | Update an existing product |
| DELETE | `/products/:id` | Delete a product           |

### Product Object

| Field      | Type   | Description                               |
| ---------- | ------ | ----------------------------------------- |
| `id`       | Number | Unique identifier, assigned automatically |
| `name`     | String | Product name                              |
| `category` | String | Product category                          |
| `price`    | Number | Product price                             |
| `quantity` | Number | Number of items in stock                  |

The API starts with one sample product:

```json
{
  "id": 1,
  "name": "Sample Product",
  "category": "General",
  "price": 10,
  "quantity": 5
}
```

---

### 1. Health Check

**`GET /`**

Response `200 OK`:

```
Product Inventory API is running!
```

### 2. List All Products

**`GET /products`**

Response `200 OK`:

```json
[
  {
    "id": 1,
    "name": "Sample Product",
    "category": "General",
    "price": 10,
    "quantity": 5
  }
]
```

### 3. Add a Product

**`POST /products`**

Header: `Content-Type: application/json`

Request body:

```json
{
  "name": "Laptop",
  "category": "Electronics",
  "price": 250000,
  "quantity": 5
}
```

Response `201 Created`:

```json
{
  "message": "Product added successfully",
  "product": {
    "id": 2,
    "name": "Laptop",
    "category": "Electronics",
    "price": 250000,
    "quantity": 5
  }
}
```

### 4. Update a Product

**`PUT /products/:id`**

Send only the fields you want to change. Any field you leave out keeps its current value.

Example: `PUT /products/1`

```json
{
  "quantity": 10
}
```

Response `200 OK`:

```json
{
  "message": "Product updated successfully",
  "product": {
    "id": 1,
    "name": "Sample Product",
    "category": "General",
    "price": 10,
    "quantity": 10
  }
}
```

Response `404 Not Found` (no product with that id):

```json
{
  "message": "Product not found"
}
```

### 5. Delete a Product

**`DELETE /products/:id`**

Example: `DELETE /products/1`

Response `200 OK`:

```json
{
  "message": "Product deleted successfully",
  "product": {
    "id": 1,
    "name": "Sample Product",
    "category": "General",
    "price": 10,
    "quantity": 5
  }
}
```

Response `404 Not Found`:

```json
{
  "message": "Product not found"
}
```

### Status Codes

| Code | Meaning           |
| ---- | ----------------- |
| 200  | Request succeeded |
| 201  | Product created   |
| 404  | Product not found |

## Testing with Postman

The repository includes an exported Postman collection: **`Product inventory team 2 Tests.postman_collection.json`**.

1. Open Postman.
2. Click **Import** and select the collection file from this repository.
3. Start the API with `node server.js`.
4. Run the requests in the collection (list, add, update, delete) and check the responses.

The collection targets `http://localhost:4000`, so the server must be running on that port.

## Known Limitations

These are things the team can improve in future versions:

- **No database.** Data is stored in memory and is lost when the server restarts.
- **No input validation.** `POST /products` does not check that required fields are present or of the correct type.
- **ID generation.** New ids are based on the list length, so deleting a product and then adding another can create a duplicate id.
- **Port variable.** The server reads `process.env.port` (lowercase); the conventional name is `PORT`.
- **No automated tests.** Testing is currently manual through Postman.

## Team and Contributions

This project was built by a team of 15 members split into four groups.

| Team                             | Focus                                                              | Members     |
| -------------------------------- | ------------------------------------------------------------------ | ----------- |
| Team 1: API Developers           | Express routes for adding, listing, editing, and deleting products | _add names_ |
| Team 2: Postman and Testing      | Endpoint testing and the exportable Postman collection             | _add names_ |
| Team 3: Slides and Documentation | 5-slide presentation deck and this README                          | _add names_ |
| Team 4: Demo Video and Flyer     | 3-5 minute live demo video and group headshot flyer                | _add names_ |

## License

ISC
