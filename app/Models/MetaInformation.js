// Meta Information Model

const mongoose = require('mongoose');

const mediaInformationSchema = new mongoose.Schema({
  model_type: { type: String, required: true },
  model_id: { type: String, required: true },
  key: { type: String, required: true },
  value: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const MediaInformation = mongoose.model('MediaInformation', mediaInformationSchema);

module.exports = MediaInformation;