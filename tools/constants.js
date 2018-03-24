const path = require('path')
const dotenv = require('dotenv')

dotenv.config()

const NODE_ENV = process.env.NODE_ENV || 'development'
const IS_DEVELOPMENT = NODE_ENV !== 'production'

const ROOT = path.join(__dirname, '..')

const PATHS = {
  ROOT,
  SRC: path.resolve(ROOT, 'src'),
  LIB: path.resolve(ROOT, 'lib')
}

const GLOBALS = [
  '__IS_DEVELOPMENT__',
  '__IS_CLIENT__',
  '__IS_SERVER__',
  'fetch',
  'Image',
  'ImageData',
  'localStorage'
]

module.exports = {
  GLOBALS,
  IS_DEVELOPMENT,
  NODE_ENV,
  PATHS,
  PORT: process.env.PORT
}
