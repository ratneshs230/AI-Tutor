const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const mongoose = require('mongoose');
const User = require('../models/User');

module.exports = function(passport) {
  if (process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET) {
    passport.use(
      new GoogleStrategy(
        {
          clientID: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET,
          callbackURL: '/api/auth/google/callback'
        },
        async (accessToken, refreshToken, profile, done) => {
          const newUser = {
            googleId: profile.id,
            name: profile.displayName,
            email: profile.emails[0].value
          };

          try {
            let user = await User.findOne({ googleId: profile.id });

            if (user) {
              done(null, user);
            } else {
              user = await User.create(newUser);
              done(null, user);
            }
          } catch (err) {
            console.error(err);
          }
        }
      )
    );
  } else {
    console.log('Google social login not configured: Missing GOOGLE_CLIENT_ID or GOOGLE_CLIENT_SECRET');
  }

  if (process.env.FACEBOOK_APP_ID && process.env.FACEBOOK_APP_SECRET) {
    passport.use(
      new FacebookStrategy(
        {
          clientID: process.env.FACEBOOK_APP_ID,
          clientSecret: process.env.FACEBOOK_APP_SECRET,
          callbackURL: '/api/auth/facebook/callback',
          profileFields: ['id', 'displayName', 'emails']
        },
        async (accessToken, refreshToken, profile, done) => {
          const newUser = {
            user_id: profile.id,
            facebookId: profile.id,
            name: profile.displayName,
            email: profile.emails && profile.emails.length > 0 ? profile.emails[0].value : undefined,
            is_student: false, // Default value
            age: 18, // Default value
            gender: 'Prefer not to say', // Default value
            login_method: 'facebook',
          };

          try {
            let user = await User.findOne({ facebookId: profile.id });

            if (user) {
              done(null, user);
            } else {
              user = await User.create(newUser);
              done(null, user);
            }
          } catch (err) {
            console.error(err);
          }
        }
      )
    );
  } else {
    console.log('Facebook social login not configured: Missing FACEBOOK_APP_ID or FACEBOOK_APP_SECRET');
  }

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => done(err, user));
  });
};
