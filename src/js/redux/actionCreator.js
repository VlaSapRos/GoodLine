import {PRELOADER_BOOLEAN, DOWNLOAD_FINISHED, COUNT_OFFSET, LIST_CREATION, SEARCH_REQUEST} from './action.js';

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

function listCreation(value) {
  return {
    type: LIST_CREATION,
    value : value
  }
}

function searchRequest(value) {
  return {
    type: SEARCH_REQUEST,
    value : value
  }
}

export { preloaderBoolean, downloadFinished, countOffset, listCreation, searchRequest }