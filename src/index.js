import React from 'react';
import ReactDOM from 'react-dom';
import './scss/main.scss';;
import App from './js/main.js';
import { Provider } from 'react-redux';
import store from './js/redux/reduxStore.js';

ReactDOM.render(
  <Provider store={store}>
    <App className='app'/>
  </Provider>, document.getElementById('root'));
