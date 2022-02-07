const path                   = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry  : './src/index.js',
  devtool: 'source-map',
  output : {
    filename: 'index.js',
    path: path.resolve(__dirname, './build'),
  },
  module : {
    rules: [],
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
}

