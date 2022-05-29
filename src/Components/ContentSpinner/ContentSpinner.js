import React from "react";
import classes from "./ContentSpinner.module.scss";
import HashLoader from "react-spinners/HashLoader";


function ContentSpinner(){

    return(
        <div className={classes.spinner_wrapper}>
            <HashLoader color='#7391FC'/>
        </div>
    )
}

export default ContentSpinner;
