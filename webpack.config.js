const path                   = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  // mode   : 'development',
  entry  : './src/index.js',
  devtool: 'source-map',
  output : {
    filename: 'dlog-node.js',
    // 必须是一个绝对路径
    path: path.resolve(__dirname, './dist'),
  },
  module : {
    rules: [],
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
}

