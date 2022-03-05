import {
    CLOSE_LOAD_MODAL_WINDOW,
    CLOSE_MODAL_WINDOW,
    SHOW_LOAD_MODAL_WINDOW,
    SHOW_MODAL_WINDOW
} from "../types/modalWindowTypes";

export function closeModalWin(){
    return{
        type: CLOSE_MODAL_WINDOW,
    }
}

export function showModalWin(payload){
    return{
        type: SHOW_MODAL_WINDOW,
        payload: payload
    }
}

export function showLoadModalWin(){
    return{
        type: SHOW_LOAD_MODAL_WINDOW
    }
}
export function closeLoadModalWin(){
    return{
        type: CLOSE_LOAD_MODAL_WINDOW
    }
}