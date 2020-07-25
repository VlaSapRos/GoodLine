import { createStore } from 'redux';
import reducer from './reducer.js';
import initialState from './initialState.js';

const reduxStore = createStore(reducer, initialState);

export default reduxStore;