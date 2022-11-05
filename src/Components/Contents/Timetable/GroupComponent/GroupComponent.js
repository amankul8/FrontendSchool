import React from "react";
import classes from "./GroupComponent.module.scss";
import {useNavigate} from "react-router-dom";


function GroupComponent(props){
    console.log(props);

    return(
        <a href={props.data.file} className={classes.wrapper} download=''>
            {props.data.class_no}
        </a>
    )
}

export default GroupComponent;