const webpack = require('webpack')
const merge = require('webpack-merge')

const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const CONSTANTS = require('./constants')

let config = {
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'standard-loader',
          options: {
            error: true,
            parser: 'babel-eslint',
            globals: CONSTANTS.GLOBALS
          }
        }
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192
          }
        }
      },
      {
        use: 'babel-loader',
        exclude: /node_modules/,
        test: /\.jsx?$/
      },
      {
        test: /\.json$/,
        use: 'json-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [
      '.jsx',
      '.js',
      '.json',
      '.sass'
    ],
    modules: [
      'node_modules',
      'tools',
      'src'
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(CONSTANTS.NODE_ENV),
      '__IS_DEVELOPMENT__': CONSTANTS.IS_DEVELOPMENT
    })
  ]
}

switch (CONSTANTS.IS_DEVELOPMENT) {
  case true:
    config = merge(
      config,
      {
        mode: 'development',
        devtool: 'cheap-module-eval-sourcemap'
      }
    )
    break
  case false:
  default:
    config = merge(
      config,
      {
        devtool: 'hidden-source-map',
        mode: 'production',
        plugins: [
          UglifyJSPlugin({
            compress: {
              warnings: false,
              screw_ie8: true,
              drop_debugger: true
            },
            output: {
              comments: false
            },
            sourcemap: true
          })
        ]
      }
    )
    break
}

module.exports = config
