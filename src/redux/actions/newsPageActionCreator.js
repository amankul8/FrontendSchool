import {
    SET_NEWS,
    LOAD_NEWS,
    SHOW_CURRENT_NEWS,
    NEWS_SPINNER_ACTIVATE,
    NEWS_SPINNER_DEACTIVATE
} from "../types/newsPageTypes";

export function load_news(){
    return{
        type: LOAD_NEWS,
    }
}

export function setNewsData(payload){
    return{
        type: SET_NEWS,
        payload: payload
    }
}

export function show_current_news(payload){
    return{
        type: SHOW_CURRENT_NEWS,
        payload: payload
    }
}

export function newsSpinnerActivate(){
    return {
        type: NEWS_SPINNER_ACTIVATE
    }
}

export function newsSpinnerDeactivate(){
    return {
        type: NEWS_SPINNER_DEACTIVATE
    }
}