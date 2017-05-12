const path = require('path');

function resolve(relativePath) {
  return path.resolve(__dirname, '..', relativePath);
}

module.exports = {
  appPath: resolve('./src'),
  appEntry: './index',
  appHtml: resolve('./template/index.html'),
  appDevBuild: resolve('./build-dev'),
  appBuild: resolve('./build'),
};
