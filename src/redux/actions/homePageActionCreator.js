import {
    HOME_CONTENT_SPINNER_DEACTIVATE,
    HOME_CONTENT_SPINNER_ACTIVATE,
    LOAD_HOME_ABOUT_DATA,
    SET_HOME_ABOUT_DATA,
    CHANGE_HOME_INFO_BLOCKS_IMAGE_LINK,
    LOAD_HOME_SLIDER_DATA,
    SET_HOME_SLIDER_DATA
} from "../types/homePageTypes";

export function loadHomeAboutData(){
    return{
        type: LOAD_HOME_ABOUT_DATA
    }
}

export function setHomeAboutData(payload){
    return{
        type: SET_HOME_ABOUT_DATA,
        payload: payload
    }
}

export function homeContentSpinnerActivate(){
    return{
        type: HOME_CONTENT_SPINNER_ACTIVATE
    }
}

export function homeContentSpinnerDeactivate(){
    return{
        type: HOME_CONTENT_SPINNER_DEACTIVATE
    }
}

export function changeHomeInfoBlocksImageLink(payload){
    return(
        {
            type: CHANGE_HOME_INFO_BLOCKS_IMAGE_LINK,
            payload: payload
        }
    )
}

export function loadHomeSliderData(){
    return{
        type: LOAD_HOME_SLIDER_DATA
    }
}

export function setHomeSliderData(payload){
    return{
        type: SET_HOME_SLIDER_DATA,
        payload: payload
    }
}