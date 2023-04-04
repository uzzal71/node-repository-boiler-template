// Payment Info Model

const mongoose = require('mongoose');

const paymentInfoSchema = new mongoose.Schema({
  service: { type: String, required: true },
  option_id: { type: String, required: true },
  data: { type: String, required: true },
  client: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Variant = mongoose.model('Variant', paymentInfoSchema);

module.exports = Variant;