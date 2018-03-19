'use strict'

const path = require('path')

const CONSTANTS = require('./tools/constants')

const server = path.join(
  __dirname,
  'lib',
  'server.js'
)

switch (CONSTANTS.IS_DEVELOPMENT) {
  case true:
    const nodemon = require('nodemon')

    nodemon({
      script: server,
      watch: server
    })

    break

  case false:
  default:
    const pm2 = require('pm2')

    pm2.start(
      server,
      {
        watch: CONSTANTS.IS_DEVELOPMENT
      },
      function (err, proc) {
        if (err) return console.error(err)

        return console.info(
          `Server started with PM2 at port ${CONSTANTS.PORT}`
        )
      }
    )

    break
}
