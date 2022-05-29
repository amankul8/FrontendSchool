import React from "react";
import classes from "./ImageModalComponent.module.scss";


function ImageModalComponent(props){

    return(
        <div className={classes.modal_window_context_wrapper}>
            <img src={props.image} alt=""/>
            <p>
                <a href={props.image} download=''>
                    {props.title}
                    <img src="https://img.icons8.com/office/16/000000/download--v1.png" alt=''/>
                </a>
            </p>
        </div>
    )
}

export default ImageModalComponent;