import {
    GLORY_BOARD_SPINNER_ACTIVATE,
    GLORY_BOARD_SPINNER_DEACTIVATE,
    LOAD_GLORY_BOARD_DATA,
    SET_GLORY_BOARD_DATA
} from "../types/gloryBoardTypes";

export const loadGloryBoardData = ()=>{
    return{
        type: LOAD_GLORY_BOARD_DATA
    }
}

export const setGloryBoardData = (payload)=>{
    return{
        type: SET_GLORY_BOARD_DATA,
        payload: payload
    }
}

export const gloryBoardSpinnerActivate = ()=>{
    return{
        type: GLORY_BOARD_SPINNER_ACTIVATE
    }
}

export const gloryBoardSpinnerDeactivate = ()=>{
    return{
        type: GLORY_BOARD_SPINNER_DEACTIVATE
    }
}