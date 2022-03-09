import {
    GALLERY_SPINNER_ACTIVATE,
    GALLERY_SPINNER_DEACTIVATE,
    SET_GALLERY_DATA,
    SET_GALLERY_IMAGE_TITLES,
    CHANGE_ERROR_GALLERY_IMAGE,
    CHANGE_GALLERY_FILTER_VALUE
} from "../types/galleryPageTypes";

let initialState = {
    images: [],
    image_titles: {},
    active_title: '',
    active_filter_value: '',
    gallery_spinner: true
}

function galleryPageReducer(state=initialState, action){
    switch (action.type){
        case SET_GALLERY_DATA:
            return {...state, images: action.payload};
        case GALLERY_SPINNER_ACTIVATE:
            return {...state, gallery_spinner: true};
        case GALLERY_SPINNER_DEACTIVATE:
            return {...state, gallery_spinner: false};
        case SET_GALLERY_IMAGE_TITLES:
            return {...state, image_titles: action.payload}
        case CHANGE_ERROR_GALLERY_IMAGE:
            let temp_state = {...state};
            temp_state.images[action.payload.id_1].file[action.payload.id_2].file=action.payload.image;
            return temp_state
        case CHANGE_GALLERY_FILTER_VALUE:
            return {...state, active_filter_value: action.payload};

        default:
            return state;
    }
}

export default galleryPageReducer;