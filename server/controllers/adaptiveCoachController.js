const LearningStrategy = require('../models/LearningStrategy');
const DailyAgenda = require('../models/DailyAgenda');

// @route    POST api/adaptive-coach/strategy
// @desc     Create or update learning strategy
// @access   Private
exports.createOrUpdateLearningStrategy = async (req, res, next) => {
  const { enrollmentId, strategyType, strategyDetails } = req.body;

  try {
    let strategy = await LearningStrategy.findOne({ enrollment_id: enrollmentId, strategy_type: strategyType });

    if (strategy) {
      // Update existing strategy
      strategy.strategy_details = strategyDetails;
      strategy.last_updated_at = Date.now();
      strategy.version += 1;
    } else {
      // Create new strategy
      strategy = new LearningStrategy({
        enrollment_id: enrollmentId,
        strategy_type: strategyType,
        strategy_details: strategyDetails,
      });
    }

    await strategy.save();
    res.json(strategy);
  } catch (err) {
    next(err);
  }
};

// @route    GET api/adaptive-coach/strategy/:enrollmentId
// @desc     Get learning strategy by enrollment ID
// @access   Private
exports.getLearningStrategy = async (req, res, next) => {
  try {
    const strategy = await LearningStrategy.findOne({ enrollment_id: req.params.enrollmentId });

    if (!strategy) {
      return res.status(404).json({ msg: 'Learning strategy not found' });
    }

    res.json(strategy);
  } catch (err) {
    next(err);
  }
};

// @route    POST api/adaptive-coach/agenda
// @desc     Create or update daily agenda
// @access   Private
exports.createOrUpdateDailyAgenda = async (req, res, next) => {
  const { enrollmentId, agendaDate, topicsCovered, tasks } = req.body;

  try {
    let agenda = await DailyAgenda.findOne({ enrollment_id: enrollmentId, agenda_date: agendaDate });

    if (agenda) {
      // Update existing agenda
      agenda.topics_covered = topicsCovered;
      agenda.tasks = tasks;
      agenda.last_updated_at = Date.now();
    } else {
      // Create new agenda
      agenda = new DailyAgenda({
        enrollment_id: enrollmentId,
        agenda_date: agendaDate,
        topics_covered: topicsCovered,
        tasks: tasks,
      });
    }

    await agenda.save();
    res.json(agenda);
  } catch (err) {
    next(err);
  }
};

// @route    GET api/adaptive-coach/agenda/:enrollmentId/:agendaDate
// @desc     Get daily agenda by enrollment ID and date
// @access   Private
exports.getDailyAgenda = async (req, res, next) => {
  try {
    const agenda = await DailyAgenda.findOne({ enrollment_id: req.params.enrollmentId, agenda_date: req.params.agendaDate });

    if (!agenda) {
      return res.status(404).json({ msg: 'Daily agenda not found' });
    }

    res.json(agenda);
  } catch (err) {
    next(err);
  }
};