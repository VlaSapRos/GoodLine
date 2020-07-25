import React from 'react';

import {PRELOADER_BOOLEAN, DOWNLOAD_FINISHED, COUNT_OFFSET, LIST_CREATION} from './action.js';

function preloaderBoolean(value) {
  return {
    type: PRELOADER_BOOLEAN,
    value : value
  }
}

function downloadFinished(value) {
  return {
    type: DOWNLOAD_FINISHED,
    value : value
  }
}

function countOffset(value) {
  return {
    type: COUNT_OFFSET,
    value : value
  }
}

function listCreation(value,dispatch) {
  console.log('жопа2',dispatch);
  return {
    type: LIST_CREATION,
    value : value
  }
}

export { preloaderBoolean, downloadFinished, countOffset, listCreation }