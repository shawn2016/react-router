const webpack = require('webpack');
var path = require('path');

var APP_DIR = path.resolve(__dirname, 'app');
module.exports = {
  context: __dirname + '/app',
  entry: {
    app: './index.js'
  },
  output: {
    path: __dirname + '/dist/assets',
    filename: '[name].bundle.js',
    publicPath: '/assets'
  },
  module: {
     rules: [
      {
        test: /\.(js|jsx)$/,
        use: [
          'babel-loader',
        ],
        include: [
          // path.resolve(__dirname, "app")
          APP_DIR
        ],
  }]},
  devServer: {
    contentBase: __dirname + '/app',
    hot: true,
    inline: true,
    open: true,
    port:3002,
    host:'127.0.0.1',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),

  ]
}
