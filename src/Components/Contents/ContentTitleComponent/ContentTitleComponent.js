import React from "react";
import classes from "./ContentTitleComponent.module.scss";
import menuOpenClose from "../../../Images/menu_show_borger_icon.png";
import {showMenu} from "../../../redux/actions/modalWinActionCreator";
import {useDispatch} from "react-redux";

function ContentTitleComponent(props){

    const dispatch = useDispatch();

    function menuButtonHandler(){
        dispatch(showMenu());
    }

    return(
        <div className={classes.content_title_wrapper} onClick={menuButtonHandler}>
            <span className={classes.menu_icon} onClick={menuButtonHandler}>
                <img src={menuOpenClose} alt=""/>
            </span>
            <span>
                {props.contentName}
            </span>
        </div>
    )
}

export default ContentTitleComponent;