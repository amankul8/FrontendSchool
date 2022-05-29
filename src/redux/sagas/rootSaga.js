import {all,} from "redux-saga/effects";
import homeWatchSaga from "./homeSaga";
import newsWatchSaga from "./newsSaga";
import galleryWatcherSaga from "./gallerySaga";
import timetableWatcherSaga from "./timetableSaga";
import teachersWatcherSaga from "./teachersSaga";
import gloryBoardWatcherSaga from "./gloryBoardSaga";
import notificationWatcherSaga from "./notificationSaga";
import SchoolDocsSaga from "./schoolDocsSaga";
import AkkrSaga from "./akkrSaga";

function* rootSaga(){
    yield all([
        homeWatchSaga(),
        newsWatchSaga(),
        galleryWatcherSaga(),
        timetableWatcherSaga(),
        teachersWatcherSaga(),
        gloryBoardWatcherSaga(),
        notificationWatcherSaga(),
        SchoolDocsSaga(),
        AkkrSaga()
    ]);
}

export default rootSaga;