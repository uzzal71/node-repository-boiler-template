// Media Model

const mongoose = require('mongoose');

const mediaSchema = new mongoose.Schema({
  model_type: { type: String, required: true },
  model_id: { type: String, required: true },
  key: { type: String, required: true },
  file_type: { type: String, required: true },
  file_extension: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Media = mongoose.model('Media', mediaSchema);

module.exports = Media;