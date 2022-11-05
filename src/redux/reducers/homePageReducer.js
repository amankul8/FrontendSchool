import {
    CHANGE_HOME_INFO_BLOCKS_IMAGE_LINK,
    HOME_CONTENT_SPINNER_ACTIVATE,
    HOME_CONTENT_SPINNER_DEACTIVATE,
    SET_HOME_ABOUT_DATA,
    SET_HOME_SLIDER_DATA
} from "../types/homePageTypes";
import {baseFileUrl, baseFileUrl_with_media} from "../../appConfig/config";

let initialState = {
    slides: [],
    info_blocks: [],
    info_block_spinner: false
}

function homePageReducer(state=  initialState, action){

    switch (action.type){
        case SET_HOME_ABOUT_DATA:
            let data = [...action.payload];
            data.map(item=>{
                item.file = item.file.map(item=>{
                    console.log(item);
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
            return {...state, info_blocks: data}
        case HOME_CONTENT_SPINNER_ACTIVATE:
            return {...state, info_block_spinner: true}
        case HOME_CONTENT_SPINNER_DEACTIVATE:
            return {...state, info_block_spinner: false}
        case CHANGE_HOME_INFO_BLOCKS_IMAGE_LINK:
            let temp_state = {...state};
            temp_state.info_blocks[action.payload.id_1].file[action.payload.id_2].file = action.payload.image
            return temp_state;
        case SET_HOME_SLIDER_DATA:
            let slides = action.payload.map(item=>{
                item.file = baseFileUrl+item.file;
                return item;
            })
            return {...state, slides: slides};
        default:
            return state;
    }
}

export default homePageReducer;

