import {
    HOME_CONTENT_SPINNER_ACTIVATE,
    HOME_CONTENT_SPINNER_DEACTIVATE,
    SET_HOME_ABOUT_DATA
} from "../types/homePageTypes";


let initialState = {
    slides: [
        {
            phrase: 'Математика вокруг нас',
            title: 'Математика',
            img: 'https://miro.medium.com/max/1200/1*HTc-8efqAbE2nSQVqt68fw.png',
        },
        {
            phrase: 'Информатика вокруг нас',
            title: 'Информатика',
            img: 'https://oir.mobi/uploads/posts/2021-01/1611923721_3-p-informatika-fon-3.jpg',
        },
        {
            phrase: 'Биология в нас',
            title: 'Биология',
            img: 'https://naked-science.ru/wp-content/uploads/2017/09/field_image_biolog_2017.jpg',
        },
    ],

    info_blocks: [],
    info_block_spinner: false
}

function homePageReducer(state=  initialState, action){

    switch (action.type){
        case SET_HOME_ABOUT_DATA:
            return {...state, info_blocks: action.payload}
        case HOME_CONTENT_SPINNER_ACTIVATE:
            return {...state, info_block_spinner: true}
        case HOME_CONTENT_SPINNER_DEACTIVATE:
            return {...state, info_block_spinner: false}
        default:
            return state;
    }
}

export default homePageReducer;

