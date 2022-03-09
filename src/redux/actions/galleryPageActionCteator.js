import {
    LOAD_GALLERY_DATA,
    SET_GALLERY_DATA,
    GALLERY_SPINNER_ACTIVATE,
    GALLERY_SPINNER_DEACTIVATE,
    SET_GALLERY_IMAGE_TITLES,
    CHANGE_ERROR_GALLERY_IMAGE,
    CHANGE_GALLERY_FILTER_VALUE
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

export const setGalleryImageTitles=(payload)=>{
    return{
        type: SET_GALLERY_IMAGE_TITLES,
        payload: payload
    }
}

export const changeErrorGalleryImage=(payload)=>{
    return{
        type: CHANGE_ERROR_GALLERY_IMAGE,
        payload: payload
    }
}

export const changeGalleryFilterValue=(payload)=>{
    return{
        type: CHANGE_GALLERY_FILTER_VALUE,
        payload: payload
    }
}

