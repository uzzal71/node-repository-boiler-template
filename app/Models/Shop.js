// Shop Model

const mongoose = require('mongoose');

const shopSchema = new mongoose.Schema({
  product_id: { type: String, required: true },
  short_description: { type: Text, required: true },
  description: { type: Text, default: NULL },
  service_description: { type: Text, default: NULL },
  cash_on_delivery: { type: Boolean, default: 0 },
  lowest_qty: { type: Number, default: 0 },
  estimation_shipping_days: { type: Number, default: 0 },
  view_count: { type: Number, default: 0 },
  has_pickup: { type: Boolean, default: 0 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Shop = mongoose.model('Shop', shopSchema);

module.exports = Shop;