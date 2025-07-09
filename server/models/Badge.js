const mongoose = require('mongoose');

const BadgeSchema = new mongoose.Schema({
  badge_name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
  },
  image_url: {
    type: String,
  },
  criteria: {
    type: Object,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Badge', BadgeSchema);