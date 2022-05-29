import {
    gallerySpinnerActivate,
    gallerySpinnerDeactivate,
    setGalleryData, setGalleryImageTitles
} from "../actions/galleryPageActionCteator";
import {
    LOAD_GALLERY_DATA
} from "../types/galleryPageTypes";
import appAxios from "../../Axios/appAxios";
import {takeEvery, call, put, fork} from "redux-saga/effects";

// async function
async function getGalleryImage(){
    try{
        const response = await appAxios('/files/gallery/');
        return response.data.data;
    }catch (e){
        console.log(e);
        return [];
    }
}

async function getGalleryImageTitles(){
    try{
        const response = await appAxios('/files/gallery/title/');
        return response.data;
    }catch (e){
        return [];
    }
}

// worker

function* imagesHandlerWorker(){
    yield put(gallerySpinnerActivate());
    const gallery_data = yield call(getGalleryImage);
    yield put(setGalleryData(gallery_data));
    yield put(gallerySpinnerDeactivate());
}

function* imageTitlesHandlerWorker(){
    const titles = yield call(getGalleryImageTitles);
    yield put(setGalleryImageTitles(titles));
}

//-------------------------------------------------------
function* getImages(){
    yield call(imageTitlesHandlerWorker);
    yield call(imagesHandlerWorker);
}

// watcher
export default function* galleryWatcherSaga(){
    yield takeEvery(LOAD_GALLERY_DATA, getImages);
}