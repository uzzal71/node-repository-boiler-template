// Category Model

const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  guest_user_id: { type: String, length: 20, default: NULL },
  user_id: { type: String, length: 24, default: NULL },
  product_id: { type: String, required: true },
  variation_slug: { type: String, default: NULL },
  variation_batch: { type: String, default: NULL },
  price: { type: mongoose.Schema.Types.Decimal128, default: 0.00 },
  tax: { type: mongoose.Schema.Types.Decimal128, default: 0.00 },
  shipping_cost: { type: mongoose.Schema.Types.Decimal128, default: 0.00 },
  discount: { type: mongoose.Schema.Types.Decimal128, default: 0.00 },
  coupon_code: { type: String, length: 20, default: NUL },
  qty: { type: Number, required: true },
  pickup_status: { type: Boolean, default: 0 },
  pickup: { type: String, default: NULL },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
