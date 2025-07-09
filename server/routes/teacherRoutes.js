const express = require('express');
const router = express.Router();
const teacherController = require('../controllers/teacherController');

// @route   POST /api/teacher/research-exam
// @desc    Simulate exam research
// @access  Public (for now, will be private later)
router.post('/research-exam', teacherController.researchExam);

// @route   POST /api/teacher/generate-strategy
// @desc    Simulate strategy generation
// @access  Public (for now, will be private later)
router.post('/generate-strategy', teacherController.generateStrategy);

// @route   POST /api/teacher/generate-daily-agenda
// @desc    Simulate daily agenda generation
// @access  Public (for now, will be private later)
router.post('/generate-daily-agenda', teacherController.generateDailyAgenda);

// @route   POST /api/teacher/generate-content
// @desc    Simulate content generation
// @access  Public (for now, will be private later)
router.post('/generate-content', teacherController.generateContent);

// @route   POST /api/teacher/generate-practice
// @desc    Simulate practice question generation
// @access  Public (for now, will be private later)
router.post('/generate-practice', teacherController.generatePractice);

module.exports = router;
