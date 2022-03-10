import React from "react";
import classes from "./MenuListLink.module.scss";
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {closeMenu} from "../../../../redux/actions/modalWinActionCreator";

function MenuListLink(props){

    const dispatch = useDispatch();

    return(
        <NavLink to={props.item.path} className={classes.menuLink} onClick={()=>dispatch(closeMenu())}>
            {props.item.text}
        </NavLink>
    )
}

export default MenuListLink;