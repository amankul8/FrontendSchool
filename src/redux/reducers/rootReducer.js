import {combineReducers} from "redux"
import homePageReducer from "./homePageReducer";
import newsPageReducer from "./newsPageReducer";
import galleryPageReducer from "./galleryPageReducer";
import teachersPageReducer from "./teachersPageReducer";
import schoolAdmissionPageReducer from "./schoolAdmissionPageReducer";
import gloryBoardPageReducer from "./gloryBoardPageReducer";
import notificationPageReducer from "./notificationPageReducer";
import modalWindowReducer from "./modalWindowReducer";
import timetablePageReducer from "./timetablePageReducer";

export const rootReducer = combineReducers({
    home_state: homePageReducer,
    news_state: newsPageReducer,
    gallery_state: galleryPageReducer,
    teachers_state: teachersPageReducer,
    school_admission_state: schoolAdmissionPageReducer,
    school_board_state: gloryBoardPageReducer,
    notification_state: notificationPageReducer,
    modal_window_state: modalWindowReducer,
    timetable_state: timetablePageReducer
})