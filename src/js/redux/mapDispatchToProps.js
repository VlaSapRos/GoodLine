import { bindActionCreators } from 'redux';
import {PRELOADER_BOOLEAN, DOWNLOAD_FINISHED, COUNT_OFFSET, LIST_CREATION} from './action.js';
import { preloaderBoolean, downloadFinished, countOffset, listCreation } from './actionCreator.js';

function mapDispatchToProps(component) { 
    switch(component) {
        case "PeopleSearch": return function(dispatch) {
            return {
                listCreation: bindActionCreators(listCreation, dispatch)
            };
        };
        case "Store": return function(dispatch) {
            return {
                listCreation: bindActionCreators(listCreation, dispatch)
            };
        };
        default: return undefined;
    }
}

export default mapDispatchToProps;

// 