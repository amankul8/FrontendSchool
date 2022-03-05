import {
    LOAD_GALLERY_DATA,
    SET_GALLERY_DATA,
    GALLERY_SPINNER_ACTIVATE,
    GALLERY_SPINNER_DEACTIVATE
} from "../types/galleryPageTypes";

export const loadGalleryData = ()=>{
    return{
        type: LOAD_GALLERY_DATA
    }
}

export const setGalleryData = (payload)=>{
    return{
        type: SET_GALLERY_DATA,
        payload: payload
    }
}

export const gallerySpinnerActivate = ()=>{
    return{
        type: GALLERY_SPINNER_ACTIVATE
    }
}

export const gallerySpinnerDeactivate = ()=>{
    return{
        type: GALLERY_SPINNER_DEACTIVATE
    }
}