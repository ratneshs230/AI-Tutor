const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
  question_id: { type: String, required: true, unique: true },
  exam_id: { type: Schema.Types.ObjectId, ref: 'Exam', required: true },
  topic: { type: String, required: true },
  difficulty: { type: String, enum: ['Easy', 'Medium', 'Hard'], required: true },
  question_text: { type: String, required: true },
  options: [{ type: String, required: true }],
  correct_answer: { type: String, required: true },
  explanation: { type: String },
  question_type: { type: String, enum: ['MCQ', 'True/False', 'Fill-in-the-blank'], required: true },
  generated_by_ai_version: { type: String },
  created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Question', QuestionSchema);
