const webpack = require('webpack');
const paths = require('./paths');

process.env.NODE_ENV = 'production';

module.exports = {
  context: paths.appPath,
  entry: {
    app: paths.appEntry,
  },
  output: {
    path: paths.appBuild,
    publicPath: '/',
    filename: 'static/js/[name].js',
    chunkFilename: 'static/js/[name].chunk.js',
  },
  resolve: {
    modules: [paths.appPath, 'node_modules'],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true,
        warnings: false,
      },
      mangle: {
        screw_ie8: true,
      },
      output: {
        comments: false,
        screw_ie8: true,
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
};
