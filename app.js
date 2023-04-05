const express = require('express');
const userController = require('./app/Controllers/require-controller/user-controller.js');
const categoryController = require('./app/Controllers/require-controller/category-controller');
const brandController = require('./app/Controllers/require-controller/brand-controller');
const orderController = require('./app/Controllers/require-controller/order-controller');

const app = express();

app.use(express.json());
app.use('/api/users', userController);
app.use('/api/categories', categoryController);
app.use('/api/brands', brandController);
app.use('/api/orders', orderController);

module.exports = app;
