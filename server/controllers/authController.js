const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

exports.registerUser = async (req, res, next) => {
  const { name, email, password, phone, age, gender, is_student, student_details } = req.body;

  try {
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    user = new User({
      name,
      email,
      password,
      phone,
      age,
      gender,
      is_student,
      student_details,
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET || config.get('jwtSecret'),
      { expiresIn: 360000 },
      (err, token) => {
        if (err) return next(err);
        res.json({ token });
      }
    );
  } catch (err) {
    next(err);
  }
};

exports.loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ msg: 'Invalid Credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid Credentials' });
    }

    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET || config.get('jwtSecret'),
      { expiresIn: 360000 },
      (err, token)=> {
        if (err) return next(err);
        res.json({ token });
      }
    );
  } catch (err) {
    next(err);
  }
};

exports.getUserProfile = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    next(err);
  }
};

exports.updateUserProfile = async (req, res, next) => {
  const {
    name,
    age,
    gender,
    is_student,
    student_details,
  } = req.body;

  const profileFields = {};
  if (name) profileFields.name = name;
  if (age) profileFields.age = age;
  if (gender) profileFields.gender = gender;
  if (is_student !== undefined) profileFields.is_student = is_student;
  if (student_details) profileFields.student_details = student_details;

  try {
    let user = await User.findById(req.user.id);

    if (!user) return res.status(404).json({ msg: 'User not found' });

    user = await User.findByIdAndUpdate(
      req.user.id,
      { $set: profileFields },
      { new: true }
    ).select('-password');

    return res.json(user);
  } catch (err) {
    next(err);
  }
};
