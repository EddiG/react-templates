'use strict';

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const paths = require('./paths');

process.env.NODE_ENV = 'development';

module.exports = {
  context: paths.appPath,
  entry: {
    app: ['react-hot-loader/patch', paths.appEntry],
  },
  output: {
    path: paths.outputPath,
    publicPath: '/',
    filename: 'static/js/[name].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.appHtml,
    }),

    new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally

    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'eslint-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  devtool: 'eval',
  devServer: {
    hot: true,
    contentBase: paths.outputPath,
    publicPath: '/',
  },
};
