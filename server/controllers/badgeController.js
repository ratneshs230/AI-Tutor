const Badge = require('../models/Badge');
const UserBadge = require('../models/UserBadge');

// @route    POST api/badges
// @desc     Create a new badge
// @access   Private (admin role in future)
exports.createBadge = async (req, res, next) => {
  const { badge_name, description, image_url, criteria } = req.body;

  try {
    let badge = await Badge.findOne({ badge_name });
    if (badge) {
      return res.status(400).json({ msg: 'Badge with this name already exists' });
    }

    badge = new Badge({
      badge_name,
      description,
      image_url,
      criteria,
    });

    await badge.save();
    res.json(badge);
  } catch (err) {
    next(err);
  }
};

// @route    POST api/badges/earn
// @desc     Award a badge to a user
// @access   Private
exports.earnBadge = async (req, res, next) => {
  const { badgeId } = req.body;

  try {
    // Check if badge exists
    const badge = await Badge.findById(badgeId);
    if (!badge) {
      return res.status(404).json({ msg: 'Badge not found' });
    }

    // Check if user already earned this badge
    let userBadge = await UserBadge.findOne({ user_id: req.user.id, badge_id: badgeId });
    if (userBadge) {
      return res.status(400).json({ msg: 'User already earned this badge' });
    }

    userBadge = new UserBadge({
      user_id: req.user.id,
      badge_id: badgeId,
    });

    await userBadge.save();
    res.json(userBadge);
  } catch (err) {
    next(err);
  }
};

// @route    GET api/badges/user
// @desc     Get all badges earned by the current user
// @access   Private
exports.getUserBadges = async (req, res, next) => {
  try {
    const userBadges = await UserBadge.find({ user_id: req.user.id }).populate('badge_id');
    res.json(userBadges);
  } catch (err) {
    next(err);
  }
};