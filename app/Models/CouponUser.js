// Coupon User Model

const mongoose = require('mongoose');

const couponUserSchema = new mongoose.Schema({
  coupon_id: { type: String, required: true },
  user_id: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const CouponUser = mongoose.model('CouponUser', couponUserSchema);

module.exports = CouponUser;