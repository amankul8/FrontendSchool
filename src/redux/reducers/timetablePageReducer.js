import {
    SET_TIMETABLE_DATA,
    TIMETABLE_SPINNER_ACTIVATE,
    TIMETABLE_SPINNER_DEACTIVATE
} from "../types/timetablePageTypes";
import {baseFileUrl, baseFileUrl_with_media} from "../../appConfig/config";

const initial_state = {
    timetables:[],
    timetable_spinner: false
}

export default function timetablePageReducer(state=initial_state, action){

    switch (action.type){
        case SET_TIMETABLE_DATA:
            let data = action.payload.map(item=>{
                item.Schedule.file.map(item=>{
                    let temp_arr = item.file.split('/');
                    if(temp_arr[0]==='media'||temp_arr[1]==='media'){
                        item.file = baseFileUrl+item.file;
                    }else{
                        item.file = baseFileUrl_with_media+item.file;
                    }
                    return item
                })
                return item;
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
