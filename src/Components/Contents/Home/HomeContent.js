import React from "react";
import classes from "./HomeContent.module.scss";
import HeaderComponent from "../../Header/HeaderComponent";

function HomeContent(){

    return(
        <div className={classes.home_content}>
            <HeaderComponent/>
            <div className={classes.content_block}>
                sdfvsdfb
            </div>
        </div>
    )
}

export default HomeContent;