import {call, takeEvery, put} from "redux-saga/effects"
import appAxios from "../../Axios/appAxios";
import {
    LOAD_NEWS,
} from "../types/newsPageTypes";
import {newsSpinnerActivate, newsSpinnerDeactivate, setNewsData} from "../actions/newsPageActionCreator";

//async functions

async function getNewsData(){
    try{
        const response = await appAxios.get("/news/");
        return response.data.data;
    }catch (e){
        return [];
    }
}


// saga workers

function* getNews(){
    yield put(newsSpinnerActivate());
    const news_data = yield call(getNewsData);
    yield put(setNewsData(news_data));
    yield put(newsSpinnerDeactivate());
    //yield put(setHomeAboutData());
}

// saga watchers

export default function* newsWatchSaga(){
    yield takeEvery(LOAD_NEWS, getNews);
}