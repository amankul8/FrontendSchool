import {call, takeEvery, put} from "redux-saga/effects"
import appAxios from "../../Axios/appAxios";
import {LOAD_HOME_ABOUT_DATA} from "../types/homePageTypes";
import {
    homeContentSpinnerActivate,
    homeContentSpinnerDeactivate,
    setHomeAboutData
} from "../actions/homePageActionCreator";

//async functions

async function getAboutSchool(){
    const response = await appAxios.get("/about_us/");
    return response.data.data;
}

// async function getSliderData(){
//     const response = await appAxios.get('/about-us');
//     return response.data;
// }

// saga workers

function* getHomeData(){
    yield put(homeContentSpinnerActivate());
    const home_data = yield call(getAboutSchool);
    yield put(setHomeAboutData(home_data))
    yield put(homeContentSpinnerDeactivate());
    //yield put(setHomeAboutData());
}

// saga watchers

export default function* homeWatchSaga(){
    yield takeEvery(LOAD_HOME_ABOUT_DATA, getHomeData);
}