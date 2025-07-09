const mongoose = require('mongoose');

const LearningStrategySchema = new mongoose.Schema({
  enrollment_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UserExamEnrollment',
    required: true,
  },
  strategy_type: {
    type: String,
    enum: ['Mock', 'True'],
    required: true,
  },
  strategy_details: {
    type: Object,
    required: true,
  },
  generated_at: {
    type: Date,
    default: Date.now,
  },
  last_updated_at: {
    type: Date,
    default: Date.now,
  },
  version: {
    type: Number,
    default: 1,
  },
});

module.exports = mongoose.model('LearningStrategy', LearningStrategySchema);
