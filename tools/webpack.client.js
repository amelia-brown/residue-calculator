const webpack = require('webpack')
const merge = require('webpack-merge')
const path = require('path')

const common = require('./webpack.common')
const CONSTANTS = require('./constants')

let config = merge(
  common,
  {
    output: {
      path: CONSTANTS.PATHS.LIB,
      filename: '[name].js',
      publicPath: '/lib/'
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          include: /node_modules/,
          use: [
            'style-loader',
            'css-loader'
          ]
        },
        {
          test: /\.(css|sass)$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                importLoaders: 2,
                modules: true,
                localIdentName: '[path][name]__[local]--[hash:base64:5]'
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                includePaths: [CONSTANTS.PATHS.SRC],
                outputStyle: 'expanded',
                sourceMap: true
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        '__IS_CLIENT__': true
      })
    ]
  }
)

switch (CONSTANTS.IS_DEVELOPMENT) {
  case true:
    config = merge(
      config,
      {
        entry: [
          'babel-polyfill',
          'react-hot-loader/patch',
          'webpack-hot-middleware/client?reload=true',
          './src/client.js'
        ],
        output: {
          chunkFilename: '[name].chunk.js',
          filename: '[name].js',
          path: CONSTANTS.PATHS.LIB,
          publicPath: '/lib/',
          sourceMapFilename: '[name].js'
        },
        plugins: [
          new webpack.HotModuleReplacementPlugin()
        ]
      }
    )
    break
  case false:
  default:
    config = merge(
      config,
      {
        entry: {
          client: [
            'babel-polyfill',
            path.join(CONSTANTS.PATHS.SRC, 'client')
          ]
        },
        output: {
          chunkFilename: '[name].[chunkhash:8].js',
          filename: '[name].js',
          sourceMapFilename: '[name].[chunkhash:8].js'
        }
      }
    )
    break
}

module.exports = config
