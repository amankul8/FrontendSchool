import React from "react";
import classes from "./Button.module.scss";

function Button(props){

    return(
        <div className={classes.wrapper} onClick={props.clickHandler}>
            {props.text}
        </div>
    )
}

export default Button;