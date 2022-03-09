import React from "react";
import classes from "./NotificationCard.module.scss";

function NotificationCard(props){
    return(
        <div className={classes.notice_wrapper}>
            <div className={classes.title}>
                {props.data.title}
            </div>
            <div className={classes.context}>
                {props.data.description}
            </div>
            <div className={classes.date}>
                <span>Дата: </span>
                <span>{props.data.created_at}</span>
            </div>
        </div>
    )
}

export default NotificationCard;