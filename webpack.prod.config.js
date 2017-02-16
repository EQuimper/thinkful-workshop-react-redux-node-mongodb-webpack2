/** @flow */
const webpack = require('webpack');
const { join } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const OfflinePlugin = require('offline-plugin');
const autoprefixer = require('autoprefixer');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const VENDOR_LIBS = [
  'react', 'react-dom', 'styled-components', 'react-redux', 'redux', 'reselect',
  'axios', 'react-router'
];

module.exports = {
  devtool: 'source-map',
  entry: {
    bundle: [
      'babel-polyfill',
      './src/index.js'
    ],
    vendor: VENDOR_LIBS
  },
  target: 'web',
  output: {
    path: join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js',
    chunkFilename: '[id].[chunkhash].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          loader: ['css-loader', 'postcss-loader']
        }),
        test: /\.css$/
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: { limit: 40000 }
          },
          'image-webpack-loader' // first one append
        ]
      },
      {
        test: /manifest.json$/,
        loader: 'file-loader?name=manifest.json'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
      options: {
        postcss: [
          autoprefixer()
        ]
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'],
      minChunks: Infinity
    }),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new CopyWebpackPlugin([
      { from: './src/manifest.json', to: 'manifest.json' }
    ]),
    new ExtractTextPlugin('styles.css'),
    new SWPrecacheWebpackPlugin({
      staticFileGlobs: [
      'client/styles.css',
     ],
      stripPrefix: 'src/static/',
      mergeStaticsConfig: true,
      staticFileGlobsIgnorePatterns: [/\.map$/], // use this to ignore sourcemap files
    }),
    new OfflinePlugin()
  ]
};
