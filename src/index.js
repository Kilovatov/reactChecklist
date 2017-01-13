import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import { createStore } from 'redux'
import todoApp from './reducers'

import './index.css';

let store = createStore(todoApp);

ReactDOM.render(
    <Root store={store}/>,
  document.getElementById('root')
);
