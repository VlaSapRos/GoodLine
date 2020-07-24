import {PRELOADER_BOOLEAN, DOWNLOAD_FINISHED, COUNT_OFFSET, ARRAY_CREATION} from './action.js';

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

function arrayCreation(value) {
  return {
    type: ARRAY_CREATION,
    value : value
  }
}

export {preloaderBoolean, downloadFinished, countOffset, arrayCreation}