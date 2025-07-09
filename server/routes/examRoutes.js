const express = require('express');
const router = express.Router();
const auth = require('../utils/authMiddleware');
const examController = require('../controllers/examController');

// @route    GET api/exams
// @desc     Get all exams
// @access   Public
router.get('/', examController.getExams);

// @route    POST api/exams
// @desc     Create an exam
// @access   Private (admin/teacher role in future)
router.post('/', auth, examController.createExam);

// @route    POST api/exams/enrollments
// @desc     Enroll user in an exam
// @access   Private
router.post('/enrollments', auth, examController.enrollInExam);

// @route    GET api/exams/enrollments
// @desc     Get user's exam enrollments
// @access   Private
router.get('/enrollments', auth, examController.getUserEnrollments);

module.exports = router;