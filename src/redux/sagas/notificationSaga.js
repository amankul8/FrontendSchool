
import appAxios from "../../Axios/appAxios";
import {takeEvery, call, put} from "redux-saga/effects";

import {LOAD_NOTIFICATION_DATA} from "../types/notificationTypes";
import {noticeSpinnerActivate, noticeSpinnerDeactivate, setNoticeData} from "../actions/notificationActionCreator";


// async function
async function getNoticeData(){
    const response = await appAxios('/news/notification');
    return response.data.data;
}

// worker

function* getNotificationData(){
    yield put(noticeSpinnerActivate());
    const notices = yield call(getNoticeData);
    yield put(setNoticeData(notices));
    yield put(noticeSpinnerDeactivate());

}

// watcher
export default function* notificationWatcherSaga(){
    yield takeEvery(LOAD_NOTIFICATION_DATA, getNotificationData);
}