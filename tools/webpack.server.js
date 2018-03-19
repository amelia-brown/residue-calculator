const merge = require('webpack-merge')
const ExtractText = require('extract-text-webpack-plugin')
const path = require('path')
const webpack = require('webpack')
const externals = require('webpack-node-externals')

const common = require('./webpack.common')
const CONSTANTS = require('./constants')

let server = merge(
  common,
  {
    name: 'server',
    target: 'node',
    entry: [
      'babel-polyfill',
      'isomorphic-fetch',
      path.join(CONSTANTS.PATHS.SRC, 'server.js')
    ],
    node: {
      __dirname: true
    },
    externals: [
      externals()
    ],
    output: {
      filename: 'server.js',
      path: CONSTANTS.PATHS.LIB,
    },
    module: {
      rules: [
        {
          test: /\.(css|sass)$/,
          use: ExtractText.extract({
            fallback: 'isomorphic-style-loader',
            use: [
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[path][name]__[local]--[hash:base64:5]',
                },
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
                  sourceMap: true,
                },
              },
            ],
          }),
        }
      ]
    },
    plugins: [
      new ExtractText({
        filename: 'bundle.css',
        disable: CONSTANTS.IS_DEVELOPMENT
      }),
      new webpack.DefinePlugin({
        '__IS_CLIENT__': false
      })
    ]
  }
)

module.exports = server
