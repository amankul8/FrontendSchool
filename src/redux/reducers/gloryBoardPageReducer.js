import {
    GLORY_BOARD_SPINNER_ACTIVATE,
    GLORY_BOARD_SPINNER_DEACTIVATE,
    SET_GLORY_BOARD_DATA
} from "../types/gloryBoardTypes";

const initial_state = {

    images: [],
    glory_board_spinner:false
}

function gloryBoardPageReducer(state=initial_state, action){

    switch (action.type){
        case SET_GLORY_BOARD_DATA:
            return {...state, images: action.payload};
        case GLORY_BOARD_SPINNER_ACTIVATE:
            return {...state, glory_board_spinner: true};
        case GLORY_BOARD_SPINNER_DEACTIVATE:
            return {...state, glory_board_spinner: false};
        default:
            return state;
    }
}

export default gloryBoardPageReducer;