const express = require('express');
const connectDB = require('./services/dbService');
const cors = require('cors');
const passport = require('passport');
const session = require('express-session');
const morgan = require('morgan');
require('dotenv').config({ path: '../.env' });

// Check for essential environment variables
if (!process.env.MONGO_URI) {
  console.warn('WARNING: MONGO_URI environment variable is not set. Database connection may fail.');
}
if (!process.env.JWT_SECRET) {
  console.warn('WARNING: JWT_SECRET environment variable is not set. JWTs will use fallback secret from config/default.json.');
}
if (!process.env.SESSION_SECRET) {
  console.warn('WARNING: SESSION_SECRET environment variable is not set. Sessions may not be secure.');
}

// Load Passport config
require('./config/passport')(passport);

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // Add this for form data
app.use(morgan('dev'));

// Express session middleware
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// DB Config
// Connect to MongoDB
connectDB();

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/exams', require('./routes/examRoutes'));
app.use('/api/teacher', require('./routes/teacherRoutes'));
app.use('/api/progress', require('./routes/userProgressRoutes')); // Updated route for UserProgress
app.use('/api/adaptive-coach', require('./routes/adaptiveCoachRoutes'));
app.use('/api/games', require('./routes/gameRoutes'));
app.use('/api/badges', require('./routes/badgeRoutes'));
app.use('/api/leaderboard', require('./routes/leaderboardRoutes'));
app.use('/api/chat', require('./routes/chatRoutes'));
app.use('/api/study-groups', require('./routes/studyGroupRoutes'));
app.use('/api/content', require('./routes/contentRoutes'));

// Error handling middleware
const errorHandler = require('./utils/errorHandler');
app.use(errorHandler);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
