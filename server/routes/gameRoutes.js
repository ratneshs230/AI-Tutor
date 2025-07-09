const express = require('express');
const router = express.Router();
const gameController = require('../controllers/gameController');

// Route to generate a new game
router.post('/generate', gameController.generateGame);

// Route to get a game by ID
router.get('/:gameId', gameController.getGameById);

module.exports = router;
