import {
    NOTIFICATION_SPINNER_ACTIVATE,
    NOTIFICATION_SPINNER_DEACTIVATE,
    SET_NOTIFICATION_DATA,
    SET_CURRENT_NOTICE_FILTER_VALUE
} from "../types/notificationTypes";

let initial_state = {
    notices:[],
    notice_spinner: false,
    current_notice_filter_value: 'all'
}

function notificationPageReducer(state=initial_state, action){
    switch (action.type){
        case SET_NOTIFICATION_DATA:
            return {...state, notices: action.payload};
        case NOTIFICATION_SPINNER_ACTIVATE:
            return {...state, notice_spinner: true};
        case NOTIFICATION_SPINNER_DEACTIVATE:
            return {...state, notice_spinner: false};
        case SET_CURRENT_NOTICE_FILTER_VALUE:
            return {...state, current_notice_filter_value: action.payload}
        default:
            return state;
    }
}

export default notificationPageReducer;