import React from 'react';

import {PRELOADER_BOOLEAN, DOWNLOAD_FINISHED, COUNT_OFFSET, LIST_CREATION} from './action.js';

export default function reducer(state, action) {
  switch(action.type) {
    case LIST_CREATION: return { usersList : action.value };
    case PRELOADER_BOOLEAN: return { preloader: action.value };
    case DOWNLOAD_FINISHED: return { usersList : store.getState().usersList.concat(action.value) }; // лучше отправлять уже готовое значение
    case COUNT_OFFSET: return { offset : store.getState().offset + action.value }; // лучше отправлять уже готовое значение наверное

    default: return state;
  }
}