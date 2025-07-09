const StudyGroup = require('../models/StudyGroup');

exports.suggestStudyGroup = async (req, res, next) => {
    try {
        const { examId, topic, members } = req.body;

        // Simulate Matchmaker AI logic for suggesting a study group
        const newStudyGroup = new StudyGroup({
            examId,
            topic,
            members,
            suggestedByAiVersion: 'placeholder-v1'
        });

        await newStudyGroup.save();

        res.status(201).json({ message: 'Study group suggested successfully.', studyGroup: newStudyGroup });
    } catch (error) {
        next(error);
    }
};

exports.getStudyGroupsForUser = async (req, res, next) => {
    try {
        const { userId } = req.params;
        const studyGroups = await StudyGroup.find({ members: userId }).populate('members', 'name').populate('examId', 'exam_name');
        res.status(200).json(studyGroups);
    } catch (error) {
        next(error);
    }
};

exports.getStudyGroupById = async (req, res, next) => {
    try {
        const { groupId } = req.params;
        const studyGroup = await StudyGroup.findById(groupId).populate('members', 'name').populate('examId', 'exam_name');

        if (!studyGroup) {
            return res.status(404).json({ message: 'Study group not found.' });
        }

        res.status(200).json(studyGroup);
    } catch (error) {
        next(error);
    }
};
