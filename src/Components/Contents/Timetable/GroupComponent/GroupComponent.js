import React from "react";
import classes from "./GroupComponent.module.scss";
import {useNavigate} from "react-router-dom";


function GroupComponent(props){
    return(
        props.data.Schedule.file.map((item, index)=>{
            return(
                <a href={item.file} className={classes.wrapper} download='' key={index}>
                    {props.data.Schedule.class_no}
                </a>
            )
        })
    )
}

export default GroupComponent;