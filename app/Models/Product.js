// Product Model

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true },
  user_id: { type: String, required: true },
  shop_id: { type: String, required: true },
  category_id: { type: String, required: true },
  brand_id: { type: String, default: NULL },
  is_published: { type: Boolean, default: 0 },
  discount: { type: NumberDecimal, default: 0.00 },
  minimum_qty: { type: String, default: 1 },
  number_of_sales: { type: Number, default: 0 },
  average_rating: { type: NumberDecimal, default: 0.00 },
  uuid: { type: String, required: true },
  deletedAt: { type: Date, default: NULL },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;