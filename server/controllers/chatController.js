const ChatMessage = require('../models/ChatMessage');

// @route    POST api/chat/send
// @desc     Send a chat message
// @access   Private
exports.sendChatMessage = async (req, res, next) => {
  const { chatType, chatRoomId, messageText, chatRoomType } = req.body;

  try {
    const newChatMessage = new ChatMessage({
      sender_id: req.user.id,
      chat_type: chatType,
      chat_room_id: chatRoomId,
      message_text: messageText,
      // chatRoomType is not directly stored in model, used for logic
    });

    const chatMessage = await newChatMessage.save();
    res.json(chatMessage);
  } catch (err) {
    next(err);
  }
};

// @route    GET api/chat
// @desc     Get chat messages by type and user/room ID
// @access   Private
exports.getChatMessages = async (req, res, next) => {
  const { chatType, userId } = req.query;

  try {
    let messages;
    if (chatType === 'ai_tutor') {
      messages = await ChatMessage.find({ chat_type: 'ai_tutor', sender_id: userId }).sort({ timestamp: 1 });
    } else if (chatType === 'community') {
      messages = await ChatMessage.find({ chat_type: 'community' }).sort({ timestamp: 1 });
    } else if (chatType === 'group') {
      messages = await ChatMessage.find({ chat_type: 'group', chat_room_id: userId }).sort({ timestamp: 1 });
    } else if (chatType === 'personal') {
      messages = await ChatMessage.find({
        chat_type: 'personal',
        $or: [
          { sender_id: req.user.id, chat_room_id: userId },
          { sender_id: userId, chat_room_id: req.user.id },
        ],
      }).sort({ timestamp: 1 });
    } else {
      return res.status(400).json({ msg: 'Invalid chat type' });
    }

    res.json(messages);
  } catch (err) {
    next(err);
  }
};