import { createStore } from 'redux';
import reducer from './reducer.js';
import initialState from './initialState.js';

const store = createStore(reducer, initialState);

export default store;