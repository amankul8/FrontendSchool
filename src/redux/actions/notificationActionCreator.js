import {
    LOAD_NOTIFICATION_DATA,
    NOTIFICATION_SPINNER_ACTIVATE,
    NOTIFICATION_SPINNER_DEACTIVATE,
    SET_NOTIFICATION_DATA
} from "../types/notificationTypes";


export const loadNoticeData = ()=>{
    return{
        type: LOAD_NOTIFICATION_DATA
    }
}

export const setNoticeData = (payload)=>{
    return{
        type: SET_NOTIFICATION_DATA,
        payload: payload
    }
}

export const noticeSpinnerActivate = ()=>{
    return{
        type: NOTIFICATION_SPINNER_ACTIVATE
    }
}

export const noticeSpinnerDeactivate = ()=>{
    return{
        type: NOTIFICATION_SPINNER_DEACTIVATE
    }
}