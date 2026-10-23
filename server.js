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
app.put('/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const product = inventory.find((p) => p.id === productId);
    if (!product) {
        return res.status(404).json({ message: 'Product not found' });
    }
    product.name = req.body.name || product.name;
    product.category = req.body.category || product.category;
    product.price = req.body.price !== undefined ? req.body.price : product.price;
    product.quantity = req.body.quantity !== undefined ? req.body.quantity : product.quantity;
    res.json({ message: 'Product updated successfully', product });
});
app.delete('/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const productIndex = inventory.findIndex((p) => p.id === productId);
    if (productIndex === -1) {
        return res.status(404).json({ message: 'Product not found' });
    }
    const deletedProduct = inventory.splice(productIndex, 1);
    res.json({ message: 'Product deleted successfully', product: deletedProduct[0] });
});
// Start server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});