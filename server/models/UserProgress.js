const mongoose = require('mongoose');

const UserProgressSchema = new mongoose.Schema({
  enrollment_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UserExamEnrollment',
    required: true,
  },
  content_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Content',
    nullable: true,
  },
  question_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Question',
    nullable: true,
  },
  interaction_type: {
    type: String,
    required: true,
    enum: ['content_view', 'question_attempt', 'quiz_completed', 'game_played', 'chat_interaction'],
  },
  timestamp: {
    type: Date,
    default: Date.now,
    required: true,
  },
  duration_seconds: {
    type: Number,
  },
  score: {
    type: Number,
  },
  correct: {
    type: Boolean,
  },
  user_input: {
    type: String,
  },
  system_response: {
    type: String,
  },
  inferred_emotional_state: {
    type: String,
  },
  raw_event_data: {
    type: Object,
  },
});

module.exports = mongoose.model('UserProgress', UserProgressSchema);
