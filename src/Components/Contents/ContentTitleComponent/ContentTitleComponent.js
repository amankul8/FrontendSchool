import React from "react";
import classes from "./ContentTitleComponent.module.scss";

function ContentTitleComponent(props){

    function menuButtonHandler(){
        console.log("HI")
    }

    return(
        <div className={classes.content_title_wrapper} onClick={menuButtonHandler}>
            <span className={classes.menu_icon} >
                |||
            </span>
            <span>
                {props.contentName}
            </span>
        </div>
    )
}

export default ContentTitleComponent;