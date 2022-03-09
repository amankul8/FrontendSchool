import React, {useEffect} from "react";
import classes from "./NotificationContent.module.scss";
import HeaderComponent from "../../Header/HeaderComponent";
import ContentTitleComponent from "../ContentTitleComponent/ContentTitleComponent";
import FilterComponent from "./FilterComponent/FilterComponent";
import NotificationCard from "./NotificationCard/NotificationCard";
import {useDispatch, useSelector} from "react-redux";
import {loadNoticeData} from "../../../redux/actions/notificationActionCreator";
import ContentSpinner from "../../ContentSpinner/ContentSpinner";


function NotificationContent(){

    const notification_state = useSelector((state)=>state.notification_state);
    const dispatch = useDispatch();

    useEffect(()=>{
        if(notification_state.notices.length === 0){
            dispatch(loadNoticeData());
        }
    }, [])

    return(
        <div className={classes.home_content}>
            <HeaderComponent/>
            <ContentTitleComponent contentName="Кулактандыруу"/>
            <div className={classes.content_block}>
                <FilterComponent/>
                <div className={classes.context_wrapper}>
                    {
                        notification_state.notice_spinner?<ContentSpinner/>:
                        notification_state.notices.length!==0?
                            notification_state.notices.filter(item=>item.title===notification_state.current_notice_filter_value).map((item, index)=>{
                            return(
                                <NotificationCard data={item} key={index}/>
                            )
                        }):"Азырча маалымат жок"
                    }
                </div>
            </div>
        </div>
    )
}

export default NotificationContent;