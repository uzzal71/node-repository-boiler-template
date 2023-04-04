// Coupon Model

const mongoose = require('mongoose');

const couponSchema = new mongoose.Schema({
  status: { type: String, length: 20, default: NULL },
  service_category_id: { type: String, required: true },
  code: { type: String, length: 20, required: true },
  limit_per_user: { type: Number, default: 0 },
  details: { type: String, default: NULL },
  discount: { type: NumberDecimal, default: 0.00 },
  discount_type: { type: String, enum: ['amount', 'percent'], required: true },
  max_discount: { type: NumberDecimal, default: 0.00 },
  min_cart_amount: { type: NumberDecimal, default: 0.00},
  start_date: { type: Date, required: true },
  end_date: { type: Date, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Coupon = mongoose.model('Coupon', couponSchema);

module.exports = Coupon;
