import {baseFileUrl, baseFileUrl_with_media} from "../../appConfig/config";
import {
    SCHOOL_DOCS_ACTIVATE_SPINNER,
    SCHOOL_DOCS_DEACTIVATE_SPINNER,
    SCHOOL_DOCS_SET_DATA
} from "../types/schoolDocsTypes";

const initial_state = {
    page_spinner: true,
    docs: [],
}

function schoolDocsReducer(state=initial_state, action){
    switch (action.type){
        case SCHOOL_DOCS_SET_DATA:
            let temp_data = action.payload;
            if(!temp_data){
                return state;
            }else{
                temp_data = temp_data.map(item=>{
                    item.file = item.file.map(item=>{
                        let temp_arr = item.file.split('/');
                        if(temp_arr[0]==='media'||temp_arr[1]==='media'){
                            item.file = baseFileUrl+item.file;
                        }else{
                            item.file = baseFileUrl_with_media+item.file;
                        }
                        return item;
                    })
                    return item;
                })
                return {...state, docs: temp_data};
            }

        case SCHOOL_DOCS_ACTIVATE_SPINNER:
            return {...state, page_spinner: true};
        case SCHOOL_DOCS_DEACTIVATE_SPINNER:
            return {...state, page_spinner: false};
        default:
            return state;
    }
}

export default schoolDocsReducer;