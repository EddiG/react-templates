const webpack = require('webpack');
const paths = require('./paths');

process.env.NODE_ENV = 'development';

module.exports = {
  context: paths.appPath,
  entry: {
    app: paths.appEntry,
  },
  output: {
    path: paths.appDevBuild,
    publicPath: '/',
    filename: 'static/js/[name].js',
  },
  resolve: {
    modules: [paths.appPath, 'node_modules'],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  devtool: 'eval',
};
