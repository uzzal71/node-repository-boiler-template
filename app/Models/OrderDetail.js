// Order Detail Model

const mongoose = require('mongoose');

const orderDetailSchema = new mongoose.Schema({
  order_id: { type: String, required: true },
  shop_id: { type: String, required: true },
  product_id: { type: String, required: true },
  unit_price: { type: String, required: true },
  qty: { type: Number, required: true },
  tax_amount: { type: mongoose.Schema.Types.Decimal128, default: 0.00 },
  shipping_cost: { type: mongoose.Schema.Types.Decimal128, default: 0.00 },
  discount: { type: mongoose.Schema.Types.Decimal128, default: 0.00 },
  coupon_code: { type: String, default: NULL },
  payment_type: { type: String, enum: ['Paid'], required: true },
  delivery_status: { type: String, enum: ['Paid'], required: true },
  pickup_time: { type: String, default: NULL },
  instruction: { type: String, default: NULL },
  spcial_instruction: { type: String, default: NULL },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const OrderDetail = mongoose.model('OrderDetail', orderDetailSchema);

module.exports = OrderDetail;