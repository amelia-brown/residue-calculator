import express from 'express'
import path from 'path'
import webpack from 'webpack'
import dev from 'webpack-dev-middleware'
import hot from 'webpack-hot-middleware'
import bodyParser from 'body-parser'

import base from 'managers/base'
import config from 'webpack.client.js'

import auth from './auth'

const ROOT = path.resolve(__dirname, '..', '..', '..')

export default Object.assign(
  {},
  base,
  {
    configureCommon (app) {
      app.use(bodyParser.json())
    },
    configureDevelopment (app) {
      const compiler = webpack(config)

      app.use(dev(compiler,
        {
          noInfo: true,
          hot: true,
          publicPath: config.output.publicPath,
          serverSideRender: true,
          logLevel: 'debug'
        })
      )

      app.use(hot(compiler,
        {
          path: '/__webpack_hmr',
          heartbeat: 10 * 1000,
          reload: true
        })
      )

      app.use(auth)
    },
    configureProduction (app) {
      app.use('/lib/', express.static(path.resolve(ROOT, 'lib')))
    }
  }
)
