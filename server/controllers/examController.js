const Exam = require('../models/Exam');
const UserExamEnrollment = require('../models/UserExamEnrollment');

// @route    GET api/exams
// @desc     Get all exams
// @access   Public
exports.getExams = async (req, res, next) => {
  try {
    const exams = await Exam.find();
    res.json(exams);
  } catch (err) {
    next(err);
  }
};

// @route    POST api/exams
// @desc     Create an exam
// @access   Private (admin/teacher role in future)
exports.createExam = async (req, res, next) => {
  const { exam_name, description, syllabus_overview, difficulty_level, recruitment_modes, exam_modes, key_topics_overview, similar_exams } = req.body;

  try {
    let exam = await Exam.findOne({ exam_name });

    if (exam) {
      return res.status(400).json({ msg: 'Exam already exists' });
    }

    exam = new Exam({
      exam_name,
      description,
      syllabus_overview,
      difficulty_level,
      recruitment_modes,
      exam_modes,
      key_topics_overview,
      similar_exams,
    });

    await exam.save();
    res.json(exam);
  } catch (err) {
    next(err);
  }
};

// @route    POST api/exams/enrollments
// @desc     Enroll user in an exam
// @access   Private
exports.enrollInExam = async (req, res, next) => {
  const { examId, targetDate } = req.body;

  try {
    // Check if exam exists
    const exam = await Exam.findById(examId);
    if (!exam) {
      return res.status(404).json({ msg: 'Exam not found' });
    }

    // Check if user is already enrolled
    let enrollment = await UserExamEnrollment.findOne({ user_id: req.user.id, exam_id: examId });
    if (enrollment) {
      return res.status(400).json({ msg: 'User already enrolled in this exam' });
    }

    enrollment = new UserExamEnrollment({
      user_id: req.user.id,
      exam_id: examId,
      target_date: targetDate || null,
    });

    await enrollment.save();
    res.json(enrollment);
  } catch (err) {
    next(err);
  }
};

// @route    GET api/exams/enrollments
// @desc     Get user's exam enrollments
// @access   Private
exports.getUserEnrollments = async (req, res, next) => {
  try {
    const enrollments = await UserExamEnrollment.find({ user_id: req.user.id }).populate('exam_id');
    res.json(enrollments);
  } catch (err) {
    next(err);
  }
};