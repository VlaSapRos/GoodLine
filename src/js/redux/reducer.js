import {PRELOADER_BOOLEAN, DOWNLOAD_FINISHED, COUNT_OFFSET, LIST_CREATION, SEARCH_REQUEST, TARGET_TRANSFER} from './action.js';

export default function reducer(state, action) {
  switch(action.type) {
    case LIST_CREATION: return {...state, usersList : action.value };
    case PRELOADER_BOOLEAN: return {...state, preloader: action.value };
    case DOWNLOAD_FINISHED: return {...state, usersList : state.usersList.concat(action.value) };
    case COUNT_OFFSET: return {...state, offset : action.value };
    case SEARCH_REQUEST: return {...state, searchRequest : action.value };
    case TARGET_TRANSFER: return {...state, contentTarget : action.value };

    default: return state;
  }
}