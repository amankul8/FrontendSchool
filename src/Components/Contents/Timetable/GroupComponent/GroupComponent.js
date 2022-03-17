import React from "react";
import classes from "./GroupComponent.module.scss";
import {useNavigate} from "react-router-dom";


function GroupComponent(props){

    return(
        <a href={props.data.file} className={classes.wrapper} download=''>
            <img src="https://img.icons8.com/office/16/000000/download--v1.png" alt=''/>
            {props.data.class_no}
        </a>
    )
}

export default GroupComponent;