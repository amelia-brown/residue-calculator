import assets from 'express-webpack-assets'
import cookie from 'cookie-parser'
import path from 'path'

import base from 'managers/base'

const ROOT = path.resolve(__dirname, '..', '..', '..')
const CONFIG = path.join(ROOT, 'config', 'webpack-assets.json')

export default Object.assign(
  {},
  base,
  {
    configureCommon (app) {
      app.set('view engine', 'ejs')
      app.set('views', path.join(
        ROOT,
        'src',
        'views'
      ))

      app.use(assets(
        CONFIG,
        {
          devMode: process.env.NODE_ENV !== 'production'
        }
      ))

      app.use(cookie())
    }
  }
)
