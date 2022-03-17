import React from "react";
import classes from "./MenuHeaderComponent.module.scss"
import app_icon from "../../../Images/app_icon.png";

function MenuHeaderComponent(){

    return(
        <div className={classes.menu_header}>
            <div className={classes.app_icon}>
                <img src={app_icon} alt=""/>
            </div>
            <div className={classes.app_name}>
                Талас шаарындагы жалпы билим берүүчү Абдуллаев Сагын атындагы №6 орто мектеби
            </div>
        </div>
    )
}

export default MenuHeaderComponent
