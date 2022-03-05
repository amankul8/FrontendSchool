import {
    SET_TIMETABLE_DATA,
    TIMETABLE_SPINNER_ACTIVATE,
    TIMETABLE_SPINNER_DEACTIVATE
} from "../types/timetablePageTypes";

const initial_state = {
    timetables:[],
    timetable_spinner: false
}

export default function timetablePageReducer(state=initial_state, action){

    switch (action.type){
        case SET_TIMETABLE_DATA:
            return {...state, timetables: action.payload};
        case TIMETABLE_SPINNER_ACTIVATE:
            return {...state, timetable_spinner: true};
        case TIMETABLE_SPINNER_DEACTIVATE:
            return {...state, timetable_spinner: false};
        default:
            return state;
    }
}
