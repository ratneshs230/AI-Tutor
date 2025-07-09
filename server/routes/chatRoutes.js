const express = require('express');
const router = express.Router();
const auth = require('../utils/authMiddleware');
const chatController = require('../controllers/chatController');

// @route    POST api/chat/send
// @desc     Send a chat message
// @access   Private
router.post('/send', auth, chatController.sendChatMessage);

// @route    GET api/chat
// @desc     Get chat messages by type and user/room ID
// @access   Private
router.get('/', auth, chatController.getChatMessages);

module.exports = router;