import {
    NEWS_SPINNER_DEACTIVATE,
    NEWS_SPINNER_ACTIVATE,
    SHOW_CURRENT_NEWS,
    SET_NEWS, CHANGE_NEWS_IMAGE
} from "../types/newsPageTypes";

let initialState = {
    newsSpinner: false,
    news: [],
    currentNews: false
}

function newsPageReducer(state=initialState, action){

    switch (action.type){
        case NEWS_SPINNER_ACTIVATE:
            return {...state, newsSpinner: true};
        case NEWS_SPINNER_DEACTIVATE:
            return {...state, newsSpinner: false}
        case SHOW_CURRENT_NEWS:
            return {
                ...state, currentNews: action.payload
            }
        case SET_NEWS:
            return {...state, news: action.payload}
        case CHANGE_NEWS_IMAGE:
            let temp_state = {...state};
            temp_state.news[action.payload.id].News.file[0].file=action.payload.image
            return temp_state;
        default:
            return state;
    }
}


export default newsPageReducer;