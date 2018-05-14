import passport from 'passport'
import { FacebookStrategy } from 'passport-facebook'

import { findOrCreate } from 'managers/routes/users'

// Init facebook login
passport.use(new FacebookStrategy({
  clientID: process.env.FACEBOOK_APP_ID,
  clientSecret: process.env.FACEBOOK_APP_SECRET,
  callbackURL: process.env.FACEBOOK_CALLBACK_URL
}, (accessToken, refreshToken, profile, done) => {
  findOrCreate(profile)
}))

export const login = async (req, res) =>
  passport.authenticate('facebook')

export const callback = async (req, res) =>
  passport.authenticate(
    'facebook',
    {
      successRedirect: '/',
      failureRedirect: '/login'
    }
  )
