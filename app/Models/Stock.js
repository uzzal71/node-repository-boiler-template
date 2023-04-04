// Stock Model

const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
  batch: { type: String, required: true },
  stock_qty: { type: String, required: true },
  price: { type: mongoose.Schema.Types.Decimal128, default: 0.00 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Stock = mongoose.model('Stock', stockSchema);

module.exports = Stock;