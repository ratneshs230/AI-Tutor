const express = require('express');
const router = express.Router();
const auth = require('../utils/authMiddleware');
const leaderboardController = require('../controllers/leaderboardController');

// @route    POST api/leaderboard
// @desc     Create or update a leaderboard entry
// @access   Private
router.post('/', auth, leaderboardController.createOrUpdateLeaderboardEntry);

// @route    GET api/leaderboard/:examId
// @desc     Get leaderboard for a specific exam
// @access   Public
router.get('/:examId', leaderboardController.getLeaderboard);

module.exports = router;