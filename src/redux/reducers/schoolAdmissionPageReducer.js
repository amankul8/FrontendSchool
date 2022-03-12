import {
    SCHOOL_ADMISSION_SPINNER_ACTIVATE,
    SCHOOL_ADMISSION_SPINNER_DEACTIVATE,
    SET_SCHOOL_ADMISSION_DATA
} from "../types/notificationTypes";
import {baseFileUrl, baseFileUrl_with_media} from "../../appConfig/config";

const initial_state = {
    sch_ad_spinner: true,
    data: '',
}

function schoolAdmissionPageReducer(state=initial_state, action){
    switch (action.type){
        case SET_SCHOOL_ADMISSION_DATA:
            let temp_data = action.payload;
            if(action.payload==''){
                return state;
            }else{
                temp_data.file.map(item=>{
                    let temp_arr = item.file.split('/');
                    if(temp_arr[0]==='media'||temp_arr[1]==='media'){
                        item.file = baseFileUrl+item.file;
                    }else{
                        item.file = baseFileUrl_with_media+item.file;
                    }
                    return item
                })
                return {...state, data: temp_data};
            }

        case SCHOOL_ADMISSION_SPINNER_ACTIVATE:
            return {...state, sch_ad_spinner: true};
        case SCHOOL_ADMISSION_SPINNER_DEACTIVATE:
            return {...state, sch_ad_spinner: false};
        default:
            return state;
    }
}

export default schoolAdmissionPageReducer;