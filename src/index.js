import React from 'react';
import ReactDOM from 'react-dom';
import './scss/main.scss';;
import App from './js/main.js';
import { Provider, connect } from 'react-redux';
import store from './js/redux/reduxStore.js';
import mapStateToProps from './js/redux/mapStateToProps.js';
import mapDispatchToProps from './js/redux/mapDispatchToProps.js';

const  App_w = connect(mapStateToProps("App"), mapDispatchToProps("App"))(App);

ReactDOM.render(
  <Provider store={store}>
    <App_w className='app'/>
  </Provider>, document.getElementById('root'));
