// Order Model

const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  order_number: { type: String, required: true },
  user_id: { type: String, required: true },
  shopping_address: { type: String, required: true },
  billing_address: { type: String, required: true },
  delivery_status: { type: String, enum: ['Paid'], required: true },
  payment_type: { type: String, enum: ['Paid'], required: true },
  payment_status: { type: String, enum: ['Paid'], required: true },
  grand_total: { type: mongoose.Schema.Types.Decimal128, default: 0.00 },
  total_discount: { type: mongoose.Schema.Types.Decimal128, default: 0.00 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;