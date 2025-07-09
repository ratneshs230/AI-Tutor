const mongoose = require('mongoose');

const ExamSchema = new mongoose.Schema({
  exam_name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
  },
  syllabus_overview: {
    type: String,
  },
  difficulty_level: {
    type: String,
    enum: ['Easy', 'Medium', 'Hard', 'Very Hard'],
  },
  recruitment_modes: {
    type: [String],
  },
  exam_modes: {
    type: [String],
  },
  key_topics_overview: {
    type: [String],
  },
  similar_exams: {
    type: [String],
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Exam', ExamSchema);