import {PRELOADER_BOOLEAN, DOWNLOAD_FINISHED, COUNT_OFFSET, LIST_CREATION, SEARCH_REQUEST} from './action.js';

export default function reducer(state, action) {
  switch(action.type) {
    case LIST_CREATION: return {...state, usersList : action.value };
    case PRELOADER_BOOLEAN: return {...state, preloader: action.value };
    case DOWNLOAD_FINISHED: return {...state, usersList : state.usersList.concat(action.value) }; // лучше отправлять уже готовое значение
    case COUNT_OFFSET: return {...state, offset : action.value }; // лучше отправлять уже готовое значение наверное
    case SEARCH_REQUEST: return {...state, searchRequest : action.value }; // лучше отправлять уже готовое значение наверное

    default: return state;
  }
}