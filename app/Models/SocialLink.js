// Social Link Model

const mongoose = require('mongoose');

const socialLinkSchema = new mongoose.Schema({
  platform: { type: String, required: true },
  model_type: { type: String, required: true },
  model_id: { type: String, default: NULL },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const SocialLink = mongoose.model('SocialLink', socialLinkSchema);

module.exports = SocialLink;