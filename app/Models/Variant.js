// Variant Model

const mongoose = require('mongoose');

const variantSchema = new mongoose.Schema({
  product_id: { type: String, required: true },
  option_id: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Variant = mongoose.model('Variant', variantSchema);

module.exports = Variant;