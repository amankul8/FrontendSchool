import React from "react";
import classes from "./ImageModalComponent.module.scss";


function ImageModalComponent(props){

    return(
        <div className={classes.modal_window_context_wrapper}>
            <img src={props.image} alt=""/>
            <p>{props.title}</p>
        </div>
    )
}

export default ImageModalComponent;