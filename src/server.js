import express from 'express'
import dotenv from 'dotenv'

import config from 'managers/config'
import routes from 'managers/routes'
import middleware from 'managers/middleware'
import db from 'db'

dotenv.config()

const app = express()
const DB = process.env.DB_NAME

config.handle(app)
middleware.handle(app)
routes.handle(app)

db
  .authenticate()
  .then(() => {
    console.log(`Connection to ${DB} has been established successfully.`)
  })
  .catch(err => {
    console.error(`Unable to connect to ${DB}:`, err)
  })

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
