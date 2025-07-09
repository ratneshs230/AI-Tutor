const mongoose = require('mongoose');

const DailyAgendaSchema = new mongoose.Schema({
  enrollment_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UserExamEnrollment',
    required: true,
  },
  agenda_date: {
    type: Date,
    required: true,
  },
  topics_covered: {
    type: [String],
  },
  tasks: {
    type: [Object],
  },
  generated_at: {
    type: Date,
    default: Date.now,
  },
  last_updated_at: {
    type: Date,
    default: Date.now,
  },
  is_completed_for_day: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('DailyAgenda', DailyAgendaSchema);
