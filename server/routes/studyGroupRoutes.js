const express = require('express');
const router = express.Router();
const studyGroupController = require('../controllers/studyGroupController');

// Route to suggest a new study group
router.post('/suggest', studyGroupController.suggestStudyGroup);

// Route to get study groups for a specific user
router.get('/user/:userId', studyGroupController.getStudyGroupsForUser);

// Route to get a study group by ID
router.get('/:groupId', studyGroupController.getStudyGroupById);

module.exports = router;
