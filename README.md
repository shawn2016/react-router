

## react-router

##### 1.0.0

##### 安装

```
npm install
```

##### 或者

```
yarn install 
```

##### 添加babelrc文件

```javascript
{
    "presets": [
      "es2015",
      "react",
      "stage-0"
    ],
    "plugins": []
}

```

##### 添加.gitignore文件

```javascript
echo 'node_modules' >> .gitignore
```

搭建基础框架

Webpack.config.js

```javascript
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

```

##### 运行

```javascript
npm run dev
```