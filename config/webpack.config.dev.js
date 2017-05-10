'use strict';

const path = require('path');

process.env.NODE_ENV = 'development';

module.exports = {
  context: path.resolve(__dirname, '../src'),
  entry: {
    app: './index',
  },
  output: {
    path: path.resolve(__dirname, '../public/'),
    publicPath: '/',
    filename: 'static/js/[name].js',
  },
};
