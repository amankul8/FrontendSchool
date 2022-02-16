import React from "react";
import classes from "./MenuListLink.module.scss";
import {NavLink} from "react-router-dom";

function MenuListLink(props){

    return(
        <NavLink to={props.item.path} className={classes.menuLink}>
            {props.item.text}
        </NavLink>
    )
}

export default MenuListLink;