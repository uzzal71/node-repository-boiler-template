const express = require('express');
const userController = require('./Controllers/user-controller');
const categoryController = require('./Controllers/category-controller');
const brandController = require('./Controllers/brand-controller');
const orderController = require('./Controllers/order-controller');

const app = express();

app.use(express.json());
app.use('/api/users', userController);
app.use('/api/categories', categoryController);
app.use('/api/brands', brandController);
app.use('/api/orders', orderController);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
