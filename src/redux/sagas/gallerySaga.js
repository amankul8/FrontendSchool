import {
    gallerySpinnerActivate,
    gallerySpinnerDeactivate,
    setGalleryData
} from "../actions/galleryPageActionCteator";
import {LOAD_GALLERY_DATA} from "../types/galleryPageTypes";
import appAxios from "../../Axios/appAxios";
import {takeEvery, call, put} from "redux-saga/effects";

// async function
async function getGalleryImage(){
    const response = await appAxios('/files/gallery/');
    return response.data.data;
}

// worker

function* getImages(){
    yield put(gallerySpinnerActivate());
    const gallery_data = yield call(getGalleryImage);
    yield put(setGalleryData(gallery_data));
    yield put(gallerySpinnerDeactivate());

}

// watcher
export default function* galleryWatcherSaga(){
    yield takeEvery(LOAD_GALLERY_DATA, getImages);
}