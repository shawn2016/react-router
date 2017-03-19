import React from 'react';
import ReactDOM from 'react-dom';

import {Hello,World} from './components/hello';
import Router from './components/router/';//引入router模块
ReactDOM.render(<Hello />, document.getElementById('hello'));
ReactDOM.render(<World />, document.getElementById('world'));
ReactDOM.render(<Router />, document.getElementById('router'));