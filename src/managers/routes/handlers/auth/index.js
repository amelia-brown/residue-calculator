import passport from 'passport'
import * as PassportFacebook from 'passport-facebook'

import { findOrCreate } from 'managers/routes/handlers/users'

const FacebookStrategy = PassportFacebook.Strategy

// Init facebook login
passport.use(new FacebookStrategy({
  clientID: process.env.FACEBOOK_APP_ID,
  clientSecret: process.env.FACEBOOK_APP_SECRET,
  callbackURL: process.env.FACEBOOK_CALLBACK_URL
}, (accessToken, refreshToken, profile, done) => {
  findOrCreate(profile, done)
}))

export const login = passport.authenticate('facebook')

export const callback = async (req, res) =>
  passport.authenticate(
    'facebook',
    {
      successRedirect: '/',
      failureRedirect: '/login'
    }
  )
