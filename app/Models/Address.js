// Brand model
const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
  model_type: { type: String, required: true },
  model_id: { type: String, required: true },
  address_line1: { type: Text, default: NULL },
  address_line2: { type: Text, default: NULL },
  country: { type: String },
  street_address: { type: String },
  state: { type: String },
  zip: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Address = mongoose.model('Address', addressSchema);

module.exports = Address;
