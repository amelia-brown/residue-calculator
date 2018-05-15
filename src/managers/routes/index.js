import { Router } from 'express'
import session from 'express-session'
import passport from 'passport'
import * as PassportFacebook from 'passport-facebook'

import base from 'managers/base'
import configureStore from 'support/configure-store'
import render from 'support/render'

import { User } from 'db'

import * as userHandlers from './handlers/users'
import * as farmHandlers from './handlers/farms'
import * as fieldHandlers from './handlers/fields'
import * as photoHandlers from './handlers/photos'

const FacebookStrategy = PassportFacebook.Strategy

// Init facebook login
passport.use(new FacebookStrategy({
  clientID: process.env.FACEBOOK_APP_ID,
  clientSecret: process.env.FACEBOOK_APP_SECRET,
  callbackURL: process.env.FACEBOOK_CALLBACK_URL
}, async (accessToken, refreshToken, profile, done) => {
  const user = await User.findOrCreate({
    where: {
      name: profile.displayName
    },
    defaults: {
      name: profile.displayName
    }
  })
  return done(null, user)
}))

export const handleRequest = (req, res) => {
  const context = {}
  const store = configureStore()

  const content = render(context, req.url, store)

  return res.render(
    'index',
    {
      content,
      IS_PRODUCTION: process.env.NODE_ENV === 'production'
    }
  )
}

export default Object.assign(
  {},
  base,
  {
    configureCommon (app) {
      app.use(session({
        secret: process.env.SECRET,
        resave: false,
        saveUninitialized: true,
        cookie: {secure: true}
      }))

      app.use(passport.initialize())
      app.use(passport.session())

      passport.serializeUser((user, done) => {
        done(null, user)
      })

      passport.deserializeUser(({id}, done) => {
        User.findById(id, (err, user) => {
          done(err, user)
        })
      })

      const router = Router()

      router.use((err, req, res, next) => {
        console.error(err)

        return res
          .status(500)
          .render('error')
      })

      router.get('/api/users/:id', userHandlers.read)

      router.get('/api/farms/:id', farmHandlers.read)
      router.get('/api/farms', farmHandlers.readAll)
      router.post('/api/farms', farmHandlers.create)

      router.get('/api/fields/:id', fieldHandlers.read)
      router.get('/api/fields', fieldHandlers.readAll)
      router.post('/api/fields', fieldHandlers.create)

      router.get('/api/photos/:id', photoHandlers.read)
      router.get('/api/photos', photoHandlers.readAll)
      router.post('/api/photos', photoHandlers.create)

      router.get('/api/login', passport.authenticate('facebook'))
      router.get('/api/login/callback', passport.authenticate('facebook', {
        successRedirect: '/',
        failureRedirect: '/login?error=true'
      }))

      router.get('*', handleRequest)
      app.use(router)
    }
  }
)
