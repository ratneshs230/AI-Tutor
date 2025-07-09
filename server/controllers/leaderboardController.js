const LeaderboardEntry = require('../models/LeaderboardEntry');

// @route    POST api/leaderboard
// @desc     Create or update a leaderboard entry
// @access   Private
exports.createOrUpdateLeaderboardEntry = async (req, res, next) => {
  const { exam_id, score } = req.body;

  try {
    let entry = await LeaderboardEntry.findOne({ user_id: req.user.id, exam_id });

    if (entry) {
      entry.score = score;
      entry.last_updated = Date.now();
    } else {
      entry = new LeaderboardEntry({
        user_id: req.user.id,
        exam_id,
        score,
      });
    }

    await entry.save();
    res.json(entry);
  } catch (err) {
    next(err);
  }
};

// @route    GET api/leaderboard/:examId
// @desc     Get leaderboard for a specific exam
// @access   Public
exports.getLeaderboard = async (req, res, next) => {
  try {
    const leaderboard = await LeaderboardEntry.find({ exam_id: req.params.examId })
      .sort({ score: -1 })
      .populate('user_id', ['name']); // Populate user name

    res.json(leaderboard);
  } catch (err) {
    next(err);
  }
};