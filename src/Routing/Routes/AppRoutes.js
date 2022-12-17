import HomeContent from "../../Components/Contents/Home/HomeContent";
import NewsContent from "../../Components/Contents/News/NewsContent";
import GalleryContent from "../../Components/Contents/Gallery/GalleryContent";
import TimetableContent from "../../Components/Contents/Timetable/TimetableContent";
import TeachersContent from "../../Components/Contents/Teachers/TheachersContent";
import GloryBoardContent from "../../Components/Contents/GloryBoard/GloryBoardContent";
import NotificationContent from "../../Components/Contents/Notification/NotificationContent";
import FeedbackContent from "../../Components/Contents/Feedback/FeedbackContent";
import NewsContext from "../../Components/Contents/News/NewsContext/NewsContext";
import Error_404 from "../../Components/Contents/Error_404/Error_404";
import Akkreditatsiya from "../../Components/Contents/Akkreditatsiya/Akkreditatsiya";

class AppRoutes{

    constructor() {
        this.routes = [
            {path: '/', content: <HomeContent/>, exact: true},
            {path: '/home', content: <HomeContent/>, exact: true},
            {path: '/news', content: <NewsContent/>, exact: true},
            {path: '/news/context/:id', content: <NewsContext/>, exact: true},
            {path: '/gallery', content: <GalleryContent/>, exact: true},
            {path: '/timetable', content: <TimetableContent/>, exact: true},
            {path: '/teachers', content: <TeachersContent/>, exact: true},
            {path: '/akkreditatsiya', content: <Akkreditatsiya/>, exact: true},
            {path: '/GloryBoard', content: <GloryBoardContent/>, exact: true},
            {path: '/notification', content: <NotificationContent/>, exact: true},
            {path: '/feedback', content: <FeedbackContent/>, exact: true},
            {path: '*', content: <Error_404/>, exact: true},
        ]
    }

    getRoutes = ()=>{
        return this.routes;
    }
}

export default new AppRoutes();
