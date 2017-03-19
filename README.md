

## react-router

##### 1.0.0

##### 下载与安装

```
git clone https://github.com/shawn2016/react-router.git
npm install
```

或者

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

##### 1.0.1

##### 添加react-route

```
npm install react-router-dom --save-dev
```

或者

```
yarn add react-router-dom
```

##### 新建文件router.js

```javascript
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const RouterDemo = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/>
    </div>
  </Router>
)

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

export default RouterDemo
```

运行！