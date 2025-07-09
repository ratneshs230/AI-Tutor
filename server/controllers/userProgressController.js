const UserProgress = require('../models/UserProgress');

// @route    POST api/progress
// @desc     Log user progress
// @access   Private
exports.logUserProgress = async (req, res, next) => {
  const {
    enrollment_id,
    content_id,
    question_id,
    interaction_type,
    duration_seconds,
    score,
    correct,
    user_input,
    system_response,
    inferred_emotional_state,
    raw_event_data,
  } = req.body;

  try {
    const newInteraction = new UserProgress({
      enrollment_id,
      content_id,
      question_id,
      interaction_type,
      duration_seconds,
      score,
      correct,
      user_input,
      system_response,
      inferred_emotional_state,
      raw_event_data,
    });

    const interaction = await newInteraction.save();
    res.json(interaction);
  } catch (err) {
    next(err);
  }
};

// @route    GET api/progress/:enrollmentId
// @desc     Get user progress by enrollment ID
// @access   Private
exports.getUserProgress = async (req, res, next) => {
  try {
    const interactions = await UserProgress.find({ enrollment_id: req.params.enrollmentId });
    res.json(interactions);
  } catch (err) {
    next(err);
  }
};
