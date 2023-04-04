// Tax Model

const mongoose = require('mongoose');

const taxSchema = new mongoose.Schema({
  product_id: { type: String, required: true },
  amount: { type: mongoose.Schema.Types.Decimal128, default: 0.00 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Tax = mongoose.model('Tax', taxSchema);

module.exports = Tax;