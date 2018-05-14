import { Router } from 'express'

import base from 'managers/base'
import configureStore from 'support/configure-store'
import render from 'support/render'

import * as userHandlers from './handlers/users'
import * as farmHandlers from './handlers/farms'
import * as fieldHandlers from './handlers/fields'
import * as photoHandlers from './handlers/photos'
import * as authHandlers from './handlers/auth'

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
      const router = Router()

      router.use((err, req, res, next) => {
        console.error(err)

        return res
          .status(500)
          .render('error')
      })

      router.get('/api/users/:id', userHandlers.read)
      router.post('/api/users', userHandlers.create)

      router.get('/api/farms/:id', farmHandlers.read)
      router.get('/api/farms', farmHandlers.readAll)
      router.post('/api/farms', farmHandlers.create)

      router.get('/api/fields/:id', fieldHandlers.read)
      router.get('/api/fields', fieldHandlers.readAll)
      router.post('/api/fields', fieldHandlers.create)

      router.get('/api/photos/:id', photoHandlers.read)
      router.get('/api/photos', photoHandlers.readAll)
      router.post('/api/photos', photoHandlers.create)

      router.get('api/login', authHandlers.login)
      router.get('api/login/callback', authHandlers.callback)

      router.get('*', handleRequest)
      app.use(router)
    }
  }
)
