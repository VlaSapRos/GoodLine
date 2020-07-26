import {PRELOADER_BOOLEAN, DOWNLOAD_FINISHED, COUNT_OFFSET, LIST_CREATION, SEARCH_REQUEST, TARGET_TRANSFER, CHANGE_PAGE, SAVE_RESPONSE, SAVE_ID, SAVE_PROFILE_INFO, SAVE_SCROLL} from './action.js';

export default function reducer(state, action) {
  switch(action.type) {
    case LIST_CREATION: return {...state, usersList : action.value };
    case PRELOADER_BOOLEAN: return {...state, preloader: action.value };
    case DOWNLOAD_FINISHED: return {...state, usersList : state.usersList.concat(action.value) };
    case COUNT_OFFSET: return {...state, offset : action.value };
    case SEARCH_REQUEST: return {...state, searchRequest : action.value };
    case TARGET_TRANSFER: return {...state, contentTarget : action.value };
    case CHANGE_PAGE: return {...state, page : action.value };
    case SAVE_RESPONSE: return {...state, response : action.value };
    case SAVE_ID: return {...state, id : action.value };
    case SAVE_PROFILE_INFO: return {...state, profileInfo : action.value };
    case SAVE_SCROLL: return {...state, scroll : action.value };
    

    default: return state;
  }
}