// Delivery Charge Model

const mongoose = require('mongoose');

const deliveryChargeSchema = new mongoose.Schema({
  product_id: { type: String, required: true },
  from_unit: { type: Number, default: 0 },
  to_unit: { type: Number, default: 0 },
  cost: { type: mongoose.Schema.Types.Decimal128, default: 0.00 },
  type: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const DeliveryCharge = mongoose.model('DeliveryCharge', deliveryChargeSchema);

module.exports = DeliveryCharge;