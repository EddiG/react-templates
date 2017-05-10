'use strict';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const paths = require('./paths');

process.env.NODE_ENV = 'development';

module.exports = {
  context: paths.appPath,
  entry: {
    app: paths.appEntry,
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
  ],
};
