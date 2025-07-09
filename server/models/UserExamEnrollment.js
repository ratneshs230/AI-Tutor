const mongoose = require('mongoose');

const UserExamEnrollmentSchema = new mongoose.Schema({
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
  target_date: {
    type: Date,
  },
  enrollment_date: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ['Active', 'Completed', 'Dropped'],
    default: 'Active',
  },
  current_progress_percentage: {
    type: Number,
    default: 0,
  },
  last_accessed_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('UserExamEnrollment', UserExamEnrollmentSchema);