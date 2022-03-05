import React from "react";
import classes from "./Button.module.scss";

function Button(props){

    return(
        <div className={classes.wrapper}>
            {props.text}
        </div>
    )
}

export default Button;