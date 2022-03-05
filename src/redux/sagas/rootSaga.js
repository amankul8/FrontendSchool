import {all,} from "redux-saga/effects";
import homeWatchSaga from "./homeSaga";
import newsWatchSaga from "./newsSaga";
import galleryWatcherSaga from "./gallerySaga";
import timetableWatcherSaga from "./timetableSaga";
import teachersWatcherSaga from "./teachersSaga";
import gloryBoardWatcherSaga from "./gloryBoardSaga";
import notificationWatcherSaga from "./notificationSaga";

function* rootSaga(){
    yield all([
        homeWatchSaga(),
        newsWatchSaga(),
        galleryWatcherSaga(),
        timetableWatcherSaga(),
        teachersWatcherSaga(),
        gloryBoardWatcherSaga(),
        notificationWatcherSaga()
    ]);
}

export default rootSaga;