import {
    CLOSE_LOAD_MODAL_WINDOW,
    CLOSE_MODAL_WINDOW,
    SHOW_LOAD_MODAL_WINDOW,
    SHOW_MODAL_WINDOW
} from "../types/modalWindowTypes";

const initial_state = {
    active: false,
    content:{
        title: '',
        image: '',
    },
    load_modal_window: false
}

function modalWindowReducer(state=initial_state, action){
    switch(action.type){
        case CLOSE_MODAL_WINDOW:
            return {...initial_state}
        case SHOW_MODAL_WINDOW:
            return {...state, content: {image: action.payload.image, title: action.payload.title}, active: true}
        case SHOW_LOAD_MODAL_WINDOW:
            return {...state, load_modal_window: true}
        case CLOSE_LOAD_MODAL_WINDOW:
            return {...state, load_modal_window: false}
        default:
            return state;
    }
}

export default modalWindowReducer;