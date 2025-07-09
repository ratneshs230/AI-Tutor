const mongoose = require('mongoose');

const ContentSchema = new mongoose.Schema({
  exam_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Exam',
    required: true,
  },
  topic: {
    type: String,
    required: true,
  },
  content_type: {
    type: String,
    required: true,
    enum: ['text_lesson', 'visual', 'audio', 'video', 'quick_note'],
  },
  content_data: {
    type: Object,
    required: true,
  },
  generated_by_ai_version: {
    type: String,
  },
  is_redundant_check_passed: {
    type: Boolean,
    default: false,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  last_accessed_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Content', ContentSchema);