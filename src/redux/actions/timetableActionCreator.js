import {
    LOAD_TIMETABLE_DATA,
    SET_TIMETABLE_DATA,
    TIMETABLE_SPINNER_ACTIVATE,
    TIMETABLE_SPINNER_DEACTIVATE
} from "../types/timetablePageTypes";

export const loadTimetableData = ()=>{
    return{
        type: LOAD_TIMETABLE_DATA
    }
}

export const setTimetableData = (payload)=>{
    return{
        type: SET_TIMETABLE_DATA,
        payload: payload
    }
}

export const timetableSpinnerActivate = ()=>{
    return{
        type: TIMETABLE_SPINNER_ACTIVATE
    }
}

export const timetableSpinnerDeactivate = ()=>{
    return{
        type: TIMETABLE_SPINNER_DEACTIVATE
    }
}