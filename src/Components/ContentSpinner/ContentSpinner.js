import React from "react";
import classes from "./ContentSpinner.module.scss";
import HashLoader from "react-spinners/HashLoader";


function ContentSpinner(){

    return(
        <div className={classes.spinner_wrapper}>
            <HashLoader color='#36D7B7'/>
        </div>
    )
}

export default ContentSpinner;
