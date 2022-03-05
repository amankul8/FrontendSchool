
import appAxios from "../../Axios/appAxios";
import {takeEvery, call, put} from "redux-saga/effects";
import {LOAD_TIMETABLE_DATA} from "../types/timetablePageTypes";
import {
    setTimetableData,
    timetableSpinnerActivate,
    timetableSpinnerDeactivate
} from "../actions/timetableActionCreator";

// async function
async function getTimetablesData(){
    const response = await appAxios('/files/schedule/');
    return response.data.data;
}

// worker

function* getTimetables(){
    yield put(timetableSpinnerActivate());
    const timetables = yield call(getTimetablesData);
    yield put(setTimetableData(timetables));
    yield put(timetableSpinnerDeactivate());

}

// watcher
export default function* timetableWatcherSaga(){
    yield takeEvery(LOAD_TIMETABLE_DATA, getTimetables);
}