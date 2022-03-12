import {
    SET_TEACHERS_DATA,
    TEACHERS_SPINNER_ACTIVATE,
    TEACHERS_SPINNER_DEACTIVATE
} from "../types/teachersPageTypes";
import {baseFileUrl, baseFileUrl_with_media} from "../../appConfig/config";

const initial_state = {
    teachers: [],
    teachers_spinner: false
}

function teachersPageReducer(state=initial_state, action){

    switch (action.type){
        case SET_TEACHERS_DATA:
            let data = action.payload.map(item=>{
                let temp_arr = item.avatar.split('/');
                if(temp_arr[0]==='media'||temp_arr[1]==='media'){
                    item.avatar = baseFileUrl+item.avatar;
                }else{
                    item.avatar = baseFileUrl_with_media+item.avatar;
                }
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