import React from "react";
import classes from './LoadModalWindow.module.scss';
import PacmanLoader from "react-spinners/PacmanLoader";

function LoadModalWindow(){


    return(
        <div className={classes.modal_window_wrapper}>
            <PacmanLoader color='#36D7B7'/>
        </div>
    )
}

export default LoadModalWindow;