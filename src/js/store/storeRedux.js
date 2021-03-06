import { createStore } from 'redux';
import React from 'react';
import reducer from './reducer.js';
import initialState from './initialState.js';

const storeRedux = createStore(reducer, initialState);

export default storeRedux;
