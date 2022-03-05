
import appAxios from "../../Axios/appAxios";
import {takeEvery, call, put} from "redux-saga/effects";
import {LOAD_TEACHERS_DATA} from "../types/teachersPageTypes";
import {
    setTeachersData,
    teachersSpinnerActivate,
    teachersSpinnerDeactivate
} from "../actions/teachersPageActionCreator";


// async function
async function getTeachersData(){
    const response = await appAxios('/about_us/teachers');
    return response.data.data;
}

// worker

function* getTeachers(){
    yield put(teachersSpinnerActivate());
    const teachers = yield call(getTeachersData);
    yield put(setTeachersData(teachers));
    yield put(teachersSpinnerDeactivate());

}

// watcher
export default function* teachersWatcherSaga(){
    yield takeEvery(LOAD_TEACHERS_DATA, getTeachers);
}