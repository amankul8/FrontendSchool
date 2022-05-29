
import appAxios from "../../Axios/appAxios";
import {takeEvery, call, put} from "redux-saga/effects";
import {AKKREDITATSIYA_LOAD_DATA} from "../types/akkreditatsiyaTypes";
import {akkrActivateSpinner, akkrDeactivateSpinner, akkrSetData} from "../actions/akkrActions";


// async function
async function getSchoolDocsData(){
    try{
        const response = await appAxios('/files/accredidation');
        return response.data.data
    }catch (e){
        return [];
    }
}

// worker

function* getSchoolDocs(){
    yield put(akkrActivateSpinner());
    const docs = yield call(getSchoolDocsData);
    yield put(akkrSetData(docs));
    yield put(akkrDeactivateSpinner());
}

// watcher
export default function* AkkrSaga(){
    yield takeEvery(AKKREDITATSIYA_LOAD_DATA, getSchoolDocs);
}