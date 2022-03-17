import React from "react";
import classes from "./Error_404.module.scss";
import HeaderComponent from "../../Header/HeaderComponent";
import ContentTitleComponent from "../ContentTitleComponent/ContentTitleComponent";
import image_404 from "../../../Images/404.png";

function Error_404(){

    return(
        <div className={classes.home_content}>
            <HeaderComponent/>
            <ContentTitleComponent contentName="Ката-404"/>
            <div className={classes.content_block}>
                <div className={classes.wrap}>
                    <div className={classes.logo}>
                        <img src={image_404} alt=""/>
                        <p><a href="/">Go back to Home</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Error_404;