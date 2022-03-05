import React from "react";
import classes from "./ContentTitleComponent.module.scss";

function ContentTitleComponent(props){

    return(
        <div className={classes.content_title_wrapper}>
            <span>
                {props.contentName}
            </span>
        </div>
    )
}

export default ContentTitleComponent;