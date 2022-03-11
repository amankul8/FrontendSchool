import {
    SET_TEACHERS_DATA,
    TEACHERS_SPINNER_ACTIVATE,
    TEACHERS_SPINNER_DEACTIVATE
} from "../types/teachersPageTypes";
import {baseFileUrl} from "../../appConfig/config";

const initial_state = {
    teachers: [],
    teachers_spinner: false
}

function teachersPageReducer(state=initial_state, action){

    switch (action.type){
        case SET_TEACHERS_DATA:
            let data = action.payload.map(item=>{
                item.avatar = baseFileUrl+item.avatar;
                return item;
            })
            return {...state, teachers: data};
        case TEACHERS_SPINNER_ACTIVATE:
            return {...state, teachers_spinner: true};
        case TEACHERS_SPINNER_DEACTIVATE:
            return {...state, teachers_spinner: false};
        default:
            return state;
    }
}

export default teachersPageReducer;