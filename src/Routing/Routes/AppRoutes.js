import HomeContent from "../../Components/Contents/Home/HomeContent";
import NewsContent from "../../Components/Contents/News/NewsContent";
import GalleryContent from "../../Components/Contents/Gallery/GalleryContent";
import TimetableContent from "../../Components/Contents/Timetable/TimetableContent";
import TeachersContent from "../../Components/Contents/Teachers/TheachersContent";
import SchoolAdmissionContent from "../../Components/Contents/SchoolAdmission/SchoolAdmissionContent";
import GloryBoardContent from "../../Components/Contents/GloryBoard/GloryBoardContent";
import NotificationContent from "../../Components/Contents/Notification/NotificationContent";
import FeedbackContent from "../../Components/Contents/Feedback/FeedbackContent";


class AppRoutes{

    constructor() {
        this.routes = [
            {path: '/', content: <HomeContent/>, exact: true},
            {path: '/home', content: <HomeContent/>, exact: true},
            {path: '/news', content: <NewsContent/>, exact: true},
            {path: '/gallery', content: <GalleryContent/>, exact: true},
            {path: '/timetable', content: <TimetableContent/>, exact: true},
            {path: '/teachers', content: <TeachersContent/>, exact: true},
            {path: '/school_admission', content: <SchoolAdmissionContent/>, exact: true},
            {path: '/GloryBoard', content: <GloryBoardContent/>, exact: true},
            {path: '/notification', content: <NotificationContent/>, exact: true},
            {path: '/feedback', content: <FeedbackContent/>, exact: true},
        ]
    }

    getRoutes = ()=>{
        return this.routes;
    }
}

export default new AppRoutes();
