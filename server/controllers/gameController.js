const Game = require('../models/Game');

exports.generateGame = async (req, res, next) => {
    try {
        const { examId, topic, gameType, gameAssets, gameLogic } = req.body;

        // Simulate game generation logic
        const newGame = new Game({
            examId,
            topic,
            gameType,
            gameAssets,
            gameLogic,
            generatedByAiVersion: 'placeholder-v1'
        });

        await newGame.save();

        res.status(201).json({ message: 'Game generated successfully.', game: newGame });
    } catch (error) {
        next(error);
    }
};

exports.getGameById = async (req, res, next) => {
    try {
        const { gameId } = req.params;
        const game = await Game.findById(gameId);

        if (!game) {
            return res.status(404).json({ message: 'Game not found.' });
        }

        res.status(200).json(game);
    } catch (error) {
        next(error);
    }
};
