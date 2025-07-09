const mongoose = require('mongoose');

const StudyGroupSchema = new mongoose.Schema({
    examId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Exam',
        required: true
    },
    topic: {
        type: String,
        required: false // Can be general or topic-specific
    },
    members: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        }
    ],
    suggestedByAiVersion: {
        type: String,
        default: 'placeholder-v1'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    isActive: {
        type: Boolean,
        default: true
    }
});

module.exports = mongoose.model('StudyGroup', StudyGroupSchema);
