const Content = require('../models/Content');

// @route    GET api/content/:topic/:contentType
// @desc     Get content by topic and type
// @access   Public
exports.getContent = async (req, res, next) => {
  try {
    const { topic, contentType } = req.params;
    const content = await Content.findOne({ topic, content_type: contentType });

    if (!content) {
      return res.status(404).json({ msg: 'Content not found' });
    }

    res.json(content);
  } catch (err) {
    next(err);
  }
};

// @route    POST api/content
// @desc     Create content
// @access   Private (admin/teacher role in future)
exports.createContent = async (req, res, next) => {
  const { exam_id, topic, content_type, content_data, generated_by_ai_version, is_redundant_check_passed } = req.body;

  try {
    const newContent = new Content({
      exam_id,
      topic,
      content_type,
      content_data,
      generated_by_ai_version,
      is_redundant_check_passed,
    });

    const content = await newContent.save();
    res.json(content);
  } catch (err) {
    next(err);
  }
};
