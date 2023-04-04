const express = require('express');
const userController = require('./app/Controllers/user-controller.js');
const categoryController = require('./app/Controllers/category-controller');
const brandController = require('./app/Controllers/brand-controller');
const orderController = require('./app/Controllers/order-controller');

const app = express();

app.use(express.json());
app.use('/api/users', userController);
app.use('/api/categories', categoryController);
app.use('/api/brands', brandController);
app.use('/api/orders', orderController);

module.exports = app;
