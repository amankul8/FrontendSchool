import {
    SET_TIMETABLE_DATA,
    TIMETABLE_SPINNER_ACTIVATE,
    TIMETABLE_SPINNER_DEACTIVATE
} from "../types/timetablePageTypes";
import {baseFileUrl} from "../../appConfig/config";

const initial_state = {
    timetables:[],
    timetable_spinner: false
}

export default function timetablePageReducer(state=initial_state, action){

    switch (action.type){
        case SET_TIMETABLE_DATA:
            let data = action.payload.map(item=>{
                item.file=baseFileUrl+item.file;
                return item
            })
            return {...state, timetables: data.sort((a, b)=> a.id > b.id ? -1 : 1)};
        case TIMETABLE_SPINNER_ACTIVATE:
            return {...state, timetable_spinner: true};
        case TIMETABLE_SPINNER_DEACTIVATE:
            return {...state, timetable_spinner: false};
        default:
            return state;
    }
}
