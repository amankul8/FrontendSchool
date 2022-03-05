import {GALLERY_SPINNER_ACTIVATE, GALLERY_SPINNER_DEACTIVATE, SET_GALLERY_DATA} from "../types/galleryPageTypes";

let initialState = {
    images: null,
    active_title: '9-may',
    gallery_spinner: false
}

function galleryPageReducer(state=initialState, action){
    switch (action.type){
        case SET_GALLERY_DATA:
            return {...state, images: action.payload};
        case GALLERY_SPINNER_ACTIVATE:
            return {...state, gallery_spinner: true};
        case GALLERY_SPINNER_DEACTIVATE:
            return {...state, gallery_spinner: false};
        default:
            return state;
    }
}

export default galleryPageReducer;