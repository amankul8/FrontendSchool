
import appAxios from "../../Axios/appAxios";
import {takeEvery, call, put} from "redux-saga/effects";
import {SCHOOL_DOCS_LOAD_DATA} from "../types/schoolDocsTypes";
import {schoolDocsActSpinner, schoolDocsDeActSpinner, schoolDocsSetData} from "../actions/schoolDocsActionCreator";


// async function
async function getSchoolDocsData(){
    try{
        const response = await appAxios('/files/school-documents');
        return response.data.data
    }catch (e){
        return [];
    }
}

// worker

function* getSchoolDocs(){
    yield put(schoolDocsActSpinner());
    const docs = yield call(getSchoolDocsData);
    yield put(schoolDocsSetData(docs));
    yield put(schoolDocsDeActSpinner());
}


// watcher
export default function* SchoolDocsSaga(){
    yield takeEvery(SCHOOL_DOCS_LOAD_DATA, getSchoolDocs);
}