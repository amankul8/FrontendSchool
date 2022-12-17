import {
    CHANGE_GLORY_BOARD_IMAGE,
    GLORY_BOARD_CURRENT_FILTER_VALUE,
    GLORY_BOARD_SPINNER_ACTIVATE,
    GLORY_BOARD_SPINNER_DEACTIVATE,
    SET_GLORY_BOARD_DATA
} from "../types/gloryBoardTypes";
import {baseFileUrl, baseFileUrl_with_media} from "../../appConfig/config";

const initial_state = {

    images: [],
    glory_board_spinner:false,
    current_filter_value: 'Окуучу'
}

function gloryBoardPageReducer(state=initial_state, action){
    let temp_list = new Set();

    switch (action.type){
        case SET_GLORY_BOARD_DATA:
            let data = action.payload.map(item=>{
                let temp_arr = item.avatar.split('/');
                if(temp_arr[0]==='media'||temp_arr[1]==='media'){
                    item.avatar = baseFileUrl+item.avatar;
                }else{
                    item.avatar = baseFileUrl_with_media+item.avatar;
                }
                return item;
            })
            return {...state, images: data};
        case GLORY_BOARD_SPINNER_ACTIVATE:
            return {...state, glory_board_spinner: true};
        case GLORY_BOARD_SPINNER_DEACTIVATE:
            return {...state, glory_board_spinner: false};
        case GLORY_BOARD_CURRENT_FILTER_VALUE:
            return {...state, current_filter_value: action.payload}
        case CHANGE_GLORY_BOARD_IMAGE:
            let temp_state = {...state};
            for(let i=0; i<temp_state.images.length; i++){
                if(temp_state.images[i].id===action.payload.id){
                    temp_state.images[i].avatar= action.payload.image;
                    break;
                }
            }
            return {...temp_state};
        default:
            return state;
    }
}

export default gloryBoardPageReducer;