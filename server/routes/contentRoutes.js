const express = require('express');
const router = express.Router();
const auth = require('../utils/authMiddleware');
const contentController = require('../controllers/contentController');

// @route    GET api/content/:topic/:contentType
// @desc     Get content by topic and type
// @access   Public
router.get('/:topic/:contentType', contentController.getContent);

// @route    POST api/content
// @desc     Create content
// @access   Private (admin/teacher role in future)
router.post('/', auth, contentController.createContent);

module.exports = router;
