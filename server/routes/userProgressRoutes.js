const express = require('express');
const router = express.Router();
const auth = require('../utils/authMiddleware');
const userProgressController = require('../controllers/userProgressController');

// @route    POST api/progress
// @desc     Log user progress
// @access   Private
router.post('/', auth, userProgressController.logUserProgress);

// @route    GET api/progress/:enrollmentId
// @desc     Get user progress by enrollment ID
// @access   Private
router.get('/:enrollmentId', auth, userProgressController.getUserProgress);

module.exports = router;
