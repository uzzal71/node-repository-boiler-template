// Tag Model

const mongoose = require('mongoose');

const tagSchema = new mongoose.Schema({
  tag_name: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Tag = mongoose.model('Tag', tagSchema);

module.exports = Tag;