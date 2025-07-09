const express = require('express');
const router = express.Router();
const auth = require('../utils/authMiddleware');
const adaptiveCoachController = require('../controllers/adaptiveCoachController');

// @route    POST api/adaptive-coach/strategy
// @desc     Create or update learning strategy
// @access   Private
router.post('/strategy', auth, adaptiveCoachController.createOrUpdateLearningStrategy);

// @route    GET api/adaptive-coach/strategy/:enrollmentId
// @desc     Get learning strategy by enrollment ID
// @access   Private
router.get('/strategy/:enrollmentId', auth, adaptiveCoachController.getLearningStrategy);

// @route    POST api/adaptive-coach/agenda
// @desc     Create or update daily agenda
// @access   Private
router.post('/agenda', auth, adaptiveCoachController.createOrUpdateDailyAgenda);

// @route    GET api/adaptive-coach/agenda/:enrollmentId/:agendaDate
// @desc     Get daily agenda by enrollment ID and date
// @access   Private
router.get('/agenda/:enrollmentId/:agendaDate', auth, adaptiveCoachController.getDailyAgenda);

module.exports = router;