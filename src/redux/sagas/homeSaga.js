import {call, takeEvery, put, fork} from "redux-saga/effects"
import appAxios from "../../Axios/appAxios";
import {LOAD_HOME_ABOUT_DATA} from "../types/homePageTypes";
import {
    homeContentSpinnerActivate,
    homeContentSpinnerDeactivate,
    setHomeAboutData, setHomeSliderData
} from "../actions/homePageActionCreator";

//async functions

async function getAboutSchool(){

    try{
        const response = await appAxios.get("/about_us/");
        return response.data;
    }catch (e){
        return []
    }
}

async function getSliderData(){

    try{
        const response = await appAxios.get('/files/slider');
        return response.data.data;
    }catch (e){
        return []
    }

}

// saga workers

function* getHomeData(){
    yield put(homeContentSpinnerActivate());
    const home_data = yield call(getAboutSchool);
    yield put(setHomeAboutData(home_data.data))
    yield put(homeContentSpinnerDeactivate());
}

function* getHomeSliders(){
    const slide_data = yield call(getSliderData);
    yield put(setHomeSliderData(slide_data));
}

function* homeWorker(){
    //yield fork(getHomeSliders);
    yield fork(getHomeData);
}

// saga watchers

export default function* homeWatchSaga(){
    yield takeEvery(LOAD_HOME_ABOUT_DATA, homeWorker);
}