import {baseFileUrl, baseFileUrl_with_media} from "../../appConfig/config";
import {
    AKKREDITATSIYA_ACTIVATE_SPINNER,
    AKKREDITATSIYA_DEACTIVATE_SPINNER,
    AKKREDITATSIYA_SET_DATA
} from "../types/akkreditatsiyaTypes";

const initial_state = {
    page_spinner: false,
    docs: []
}


function akkreditatsiyaReducer(state=initial_state, action){

    switch (action.type){
        case AKKREDITATSIYA_SET_DATA:
            let temp_data = action.payload;
            if(!temp_data){
                return state;
            }else{
                temp_data = temp_data.map(item=>{
                    let temp_arr = item.file.split('/');
                    if(temp_arr[0]==='media'||temp_arr[1]==='media'){
                        item.file = baseFileUrl+item.file;
                    }else{
                        item.file = baseFileUrl_with_media+item.file;
                    }
                    return item;
                })
                return {...state, docs: temp_data};
            }

        case AKKREDITATSIYA_ACTIVATE_SPINNER:
            return {...state, page_spinner: true};
        case AKKREDITATSIYA_DEACTIVATE_SPINNER:
            return {...state, page_spinner: false};
        default:
            return state;
    }
}

export default akkreditatsiyaReducer;