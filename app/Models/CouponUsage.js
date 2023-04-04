// Coupon Usage Model

const mongoose = require('mongoose');

const couponUsageSchema = new mongoose.Schema({
  user_id: { type: String, required: true },
  coupon_id: { type: String, required: true },
  discount_amount: { type: NumberDecimal, default: 0.00 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const CouponUsage = mongoose.model('CouponUsage', couponUsageSchema);

module.exports = CouponUsage;