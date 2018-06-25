import { Router } from 'express'
import session from 'express-session'
import passport from 'passport'
import * as PassportFacebook from 'passport-facebook'
import * as PassportAnonymous from 'passport-anonymous'

import base from 'managers/base'
import configureStore from 'support/configure-store'
import render from 'support/render'

import * as userHandlers from './handlers/users'
import * as farmHandlers from './handlers/farms'
import * as fieldHandlers from './handlers/fields'
import * as photoHandlers from './handlers/photos'
import * as s3Handlers from './handlers/s3'

import { User } from 'db'

const FacebookStrategy = PassportFacebook.Strategy
const AnonymousStrategy = PassportAnonymous.Strategy

// Init facebook login
passport.use(new FacebookStrategy({
  clientID: process.env.FACEBOOK_APP_ID,
  clientSecret: process.env.FACEBOOK_APP_SECRET,
  callbackURL: process.env.FACEBOOK_CALLBACK_URL
}, userHandlers.createFromFacebook))

passport.use(new AnonymousStrategy())

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
        saveUninitialized: true,
        resave: false
      }))

      app.use(passport.initialize())
      app.use(passport.session())

      passport.serializeUser((user, done) => {
        return done(null, user)
      })

      passport.deserializeUser(async ([{id}], done) => {
        try {
          const user = await User.findById(id)
          return done(null, user)
        } catch (err) {
          return done(err)
        }
      })

      const router = Router()

      router.use((err, req, res, next) => {
        console.error(err)

        return res
          .status(500)
          .render('error')
      })

      router.get('/api/user', userHandlers.read)

      router.get('/api/farms/:id', farmHandlers.read)
      router.get('/api/farms', farmHandlers.readAll)
      router.post('/api/farms', farmHandlers.create)

      router.get('/api/fields/:id', fieldHandlers.read)
      router.get('/api/fields', fieldHandlers.readAll)
      router.post('/api/fields', fieldHandlers.create)

      router.get('/api/photos/:id', photoHandlers.read)
      router.get('/api/photos', photoHandlers.readAll)
      router.post('/api/photos', photoHandlers.create)

      router.get('/api/sign-s3', s3Handlers.create)

      router.get('/api/login', passport.authenticate('facebook'))
      router.get('/api/login/callback', passport.authenticate('facebook', {
        successRedirect: '/',
        failureRedirect: '/login?error=true'
      }))
      router.get('/api/login/anonymous', passport.authenticate('anonymous', {
        successRedirect: '/',
        failureRedirect: '/login?error=true'
      }), userHandlers.createAnonymous)

      router.get('*', handleRequest)
      app.use(router)
    }
  }
)
