import {PRELOADER_BOOLEAN, DOWNLOAD_FINISHED, COUNT_OFFSET, LIST_CREATION, SEARCH_REQUEST, TARGET_TRANSFER} from './action.js';

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

function targetTransfer(value) {
  return {
    type: TARGET_TRANSFER,
    value : value
  }
}

// function scrollTopZero(value) {
//   return {
//     type: SCROLL_TOP_ZERO,
//     value : value
//   }
// }


export { preloaderBoolean, downloadFinished, countOffset, listCreation, searchRequest, targetTransfer}