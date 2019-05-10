import {
    ACTIVE_MODAL,
    CLOSE_MODAL
} from '../actions/index';

export default function (state = [], action) {
    switch (action.type) {
        case ACTIVE_MODAL:
            return {
                ...state,
                activePost: action.data
            }
            case CLOSE_MODAL:
                return {
                    ...state,
                    activePost: ''
                }
    }

    return state;
}