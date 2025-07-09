const express = require('express');
const router = express.Router();
const auth = require('../utils/authMiddleware');
const badgeController = require('../controllers/badgeController');

// @route    POST api/badges
// @desc     Create a new badge
// @access   Private (admin role in future)
router.post('/', auth, badgeController.createBadge);

// @route    POST api/badges/earn
// @desc     Award a badge to a user
// @access   Private
router.post('/earn', auth, badgeController.earnBadge);

// @route    GET api/badges/user
// @desc     Get all badges earned by the current user
// @access   Private
router.get('/user', auth, badgeController.getUserBadges);

module.exports = router;