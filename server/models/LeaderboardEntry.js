const mongoose = require('mongoose');

const LeaderboardEntrySchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  exam_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Exam',
    required: true,
  },
  score: {
    type: Number,
    required: true,
    default: 0,
  },
  last_updated: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('LeaderboardEntry', LeaderboardEntrySchema);