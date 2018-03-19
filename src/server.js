import express from 'express'
import dotenv from 'dotenv'

import config from 'managers/config'
import routes from 'managers/routes'
import middleware from 'managers/middleware'

dotenv.config()

const app = express()

config.handle(app)
middleware.handle(app)
routes.handle(app)

app.listen(
  process.env.PORT,
  error => {
    if (error) {
      return console.error(
        'Failed to start the server',
        error
      )
    }
    return console.info(
      'Started server successfully'
    )
  }
)
