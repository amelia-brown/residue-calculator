import { Router } from 'express'

import base from 'managers/base'
import configureStore from 'support/configure-store'
import render from 'support/render'

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

      router.get('*', handleRequest)
      app.use(router)
    }
  }
)
