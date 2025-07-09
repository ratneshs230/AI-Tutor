const mongoose = require('mongoose');

const ChatMessageSchema = new mongoose.Schema({
  sender_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  chat_type: {
    type: String,
    enum: ['ai_tutor', 'community', 'group', 'personal'],
    required: true,
  },
  chat_room_id: {
    type: mongoose.Schema.Types.ObjectId,
    // ref: 'StudyGroup' or 'User' depending on chat_type
    // Nullable for community chat where there's no specific room ID
  },
  message_text: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  is_moderated: {
    type: Boolean,
    default: false,
  },
  moderation_notes: {
    type: String,
  },
  ai_response_to_message_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ChatMessage',
  },
});

module.exports = mongoose.model('ChatMessage', ChatMessageSchema);
