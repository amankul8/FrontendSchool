
import appAxios from "../../Axios/appAxios";
import {takeEvery, call, put} from "redux-saga/effects";
import {LOAD_GLORY_BOARD_DATA} from "../types/gloryBoardTypes";
import {
    gloryBoardSpinnerActivate,
    gloryBoardSpinnerDeactivate,
    setGloryBoardData
} from "../actions/gloryBoardActionCreator";


// async function
async function getGloryBoard(){
    try{
        const response = await appAxios('/about_us/glory-board');
        return response.data.data;
    }catch (e){
        return []
    }
}

// worker

function* getGloryBoardData(){
    yield put(gloryBoardSpinnerActivate());
    const glory_data = yield call(getGloryBoard);
    yield put(setGloryBoardData(glory_data));
    yield put(gloryBoardSpinnerDeactivate());

}

// watcher
export default function* gloryBoardWatcherSaga(){
    yield takeEvery(LOAD_GLORY_BOARD_DATA, getGloryBoardData);
}