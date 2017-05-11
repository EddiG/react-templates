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
    path: paths.appDevBuild,
    publicPath: '/',
    filename: 'static/js/[name].js',
  },
  resolve: {
    modules: [paths.appPath, 'node_modules'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.appHtml,
    }),

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
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
        loader: 'eslint-loader',
        options: {
          failOnError: true,
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        exclude: [/\.html$/, /\.js$/, /\.css/, /\.svg$/],
        use: {
          loader: 'url-loader',
          options: {
            limit: 10 * 1024,
            name: 'static/media/[name].[hash:8].[ext]',
          },
        },
      },
      {
        test: [/\.svg/],
        use: {
          loader: 'file-loader',
          options: {
            name: 'static/media/[name].[hash:8].[ext]',
          },
        },
      },
    ],
  },
  devtool: 'eval',
  devServer: {
    hot: true,
    contentBase: paths.appDevBuild,
    publicPath: '/',
  },
};
