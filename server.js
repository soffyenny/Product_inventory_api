const express = require('express');
const app = express();
const port = process.env.port || 4000;
// Middleware to parse JSON
app.use(express.json());
// Initial sample data baseline for the team to build upon
let inventory = [
    { id: 1, name: "Sample Product", category: "General", price: 10, quantity: 5 }
];
// Base route
app.get('/', (req, res) => {
    res.send('Product Inventory API is running!');
});
app.get('/products', (req, res) => {
    res.json(inventory);
});
app.post('/products', (req, res) => {
    const newProduct = {
        id: inventory.length + 1,
        name: req.body.name,
        category: req.body.category,
        price: req.body.price,
        quantity: req.body.quantity
    };
    inventory.push(newProduct);
    res.status(201).json({ message: "Product added successfully", product: newProduct });
});
// Start server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});