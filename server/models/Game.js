const mongoose = require('mongoose');

const GameSchema = new mongoose.Schema({
    examId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Exam',
        required: true
    },
    topic: {
        type: String,
        required: true
    },
    gameType: {
        type: String, // e.g., 'Physics Simulation', 'Chemistry Puzzle'
        required: true
    },
    gameAssets: {
        type: mongoose.Schema.Types.Mixed, // URLs/data for game elements
        required: true
    },
    gameLogic: {
        type: mongoose.Schema.Types.Mixed, // Configurable parameters for game engine
        required: true
    },
    generatedByAiVersion: {
        type: String,
        default: 'placeholder-v1'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    lastPlayedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Game', GameSchema);
