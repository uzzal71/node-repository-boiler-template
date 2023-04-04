// Brand model
const mongoose = require('mongoose');

const brandSchema = new mongoose.Schema({
  parent_id: { type: Number, default: 0 },
  name: { type: String, length: 50, required: true },
  slug: { type: String, length: 50, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Brand = mongoose.model('Brand', brandSchema);

module.exports = Brand;
