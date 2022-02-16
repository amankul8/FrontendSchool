import HomeContent from "../../Components/Contents/Home/HomeContent";
import NewsContent from "../../Components/Contents/News/NewsContent";
import GalleryContent from "../../Components/Contents/Gallery/GalleryContent";
import TimetableContent from "../../Components/Contents/Timetable/TimetableContent";
import TeachersContent from "../../Components/Contents/Teachers/TheachersContent";
import SchoolAdmissionContent from "../../Components/Contents/SchoolAdmission/SchoolAdmissionContent";
import GloryBoardContent from "../../Components/Contents/GloryBoard/GloryBoardContent";
import NotificationContent from "../../Components/Contents/Notification/NotificationContent";
import FeedbackContent from "../../Components/Contents/Feedback/FeedbackContent";

class MenuUrls{
    constructor() {
        this.menuLinkList = [
            {path: '/', text: "Башкы"},
            {path: '/news', text: "Жанылыктар"},
            {path: '/gallery', text: "Фотогалерея"},
            {path: '/timetable', text: "Расписание"},
            {path: '/teachers', text: "Мугалимдер"},
            {path: '/school_admission', text: "Мектепке кабыл алуу"},
            {path: '/GloryBoard', text: "Ардак тактасы"},
            {path: '/notification',text: "Кулактандыруу"},
            {path: '/feedback',text: "Байланыш"},
        ]
    }

    getMenuList (){
        return this.menuLinkList
    }
}

export default new MenuUrls();