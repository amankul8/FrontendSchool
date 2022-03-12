
import appAxios from "../../Axios/appAxios";
import {takeEvery, call, put} from "redux-saga/effects";

import {LOAD_NOTIFICATION_DATA, LOAD_SCHOOL_ADMISSION_DATA} from "../types/notificationTypes";
import {
    noticeSpinnerActivate,
    noticeSpinnerDeactivate,
    schAdmSpinnerActivate, schAdmSpinnerDeactivate,
    setNoticeData, setSchAdmData
} from "../actions/notificationActionCreator";


// async function
async function getNoticeData(){
    try{
        const response = await appAxios('/news/notification');
        return response.data.data;
    }catch (e){
        return [];
    }
}

async function getSchoolAdmissionData(){
    try{
        const response = await appAxios('/about_us/school-admission');
        return response.data.data;
    }catch (e){
        return [];
    }
}

// worker

function* getNotificationData(){
    yield put(noticeSpinnerActivate());
    const notices = yield call(getNoticeData);
    yield put(setNoticeData(notices));
    yield put(noticeSpinnerDeactivate());
}

function* getSchoolAdmissionWorker(){
    yield put(schAdmSpinnerActivate());
    const sc_a_data = yield call(getSchoolAdmissionData);
    yield put(setSchAdmData(sc_a_data));
    yield put(schAdmSpinnerDeactivate());
}

// watcher
export default function* notificationWatcherSaga(){
    yield takeEvery(LOAD_NOTIFICATION_DATA, getNotificationData);
    yield takeEvery(LOAD_SCHOOL_ADMISSION_DATA, getSchoolAdmissionWorker);
}