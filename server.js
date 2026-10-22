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
// Start server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});