import {
    CHANGE_GLORY_BOARD_IMAGE,
    GLORY_BOARD_CURRENT_FILTER_VALUE,
    GLORY_BOARD_SPINNER_ACTIVATE,
    GLORY_BOARD_SPINNER_DEACTIVATE,
    SET_GLORY_BOARD_DATA
} from "../types/gloryBoardTypes";

const initial_state = {

    images: [],
    glory_board_spinner:false,
    filter_list: [],
    current_filter_value: ''
}

function gloryBoardPageReducer(state=initial_state, action){
    let temp_list = new Set();

    switch (action.type){
        case SET_GLORY_BOARD_DATA:
            action.payload.map(item=>{
                temp_list.add(item.glory_whom);
            })
            temp_list = Array.from(temp_list);
            return {
                ...state,
                current_filter_value: temp_list[0],
                filter_list: temp_list,
                images: action.payload
            };
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