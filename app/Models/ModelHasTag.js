// Category model
const mongoose = require('mongoose');

const modelHasTagSchema = new mongoose.Schema({
  tag_id: { type: String, required: true },
  model_type: { type: String, required: true },
  model_id: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const ModelHasTag = mongoose.model('ModelHasTag', modelHasTagSchema);

module.exports = ModelHasTag;