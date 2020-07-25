import { bindActionCreators } from 'redux';
import {PRELOADER_BOOLEAN, DOWNLOAD_FINISHED, COUNT_OFFSET, LIST_CREATION} from './action.js';

function mapDispatchToProps(component) { 
    switch(component) {
        case "NeedForRedux": return function(dispatch) {
            return {
              listCreation: bindActionCreators(LIST_CREATION, dispatch)
            };
        };
        case "Component_2": return function(dispatch) {
            return {
                change_value_2: bindActionCreators(action_2, dispatch)
            };
        };
        default: return undefined;
    }
}

export default mapDispatchToProps;