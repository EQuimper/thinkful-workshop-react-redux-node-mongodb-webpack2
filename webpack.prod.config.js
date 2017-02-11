const webpack = require('webpack');
const { join } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const VENDOR_LIBS = [
  'react', 'react-dom', 'styled-components', 'react-redux', 'redux', 'reselect'
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
  output: {
    path: join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js',
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
          loader: 'css-loader'
        }),
        test: /\.css$/
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
      debug: false
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new ExtractTextPlugin('style.css')
  ]
};
