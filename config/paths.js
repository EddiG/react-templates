const path = require('path');

function resolve(relativePath) {
  return path.resolve(__dirname, '..', relativePath);
}

module.exports = {
  appPath: resolve('./src'),
  appEntry: './index',
  outputPath: resolve('./public'),
  appHtml: resolve('./template/index.html'),
};
