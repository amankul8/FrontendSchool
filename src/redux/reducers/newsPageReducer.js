import {
    NEWS_SPINNER_DEACTIVATE,
    NEWS_SPINNER_ACTIVATE,
    SHOW_CURRENT_NEWS,
    SET_NEWS, CHANGE_NEWS_IMAGE
} from "../types/newsPageTypes";
import {baseFileUrl, baseFileUrl_with_media} from "../../appConfig/config";

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
            return {...state, currentNews: action.payload}
        case SET_NEWS:
            let data = action.payload.map(item=>{
                item.file = item.News.file.map(item=>{
                    let temp_arr = item.file.split('/');
                    if(temp_arr[0]==='media'||temp_arr[1]==='media'){
                        item.file = baseFileUrl+item.file;
                    }else{
                        item.file = baseFileUrl_with_media+item.file;
                    }
                    return item;
                })
                return item;
            })
            return {...state, news: data}
        case CHANGE_NEWS_IMAGE:
            let temp_state = {...state};
            temp_state.news[action.payload.id].file[0].file=action.payload.image
            return temp_state;
        default:
            return state;
    }
}


export default newsPageReducer;