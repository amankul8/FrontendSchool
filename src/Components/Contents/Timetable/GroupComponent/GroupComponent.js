import React from "react";
import classes from "./GroupComponent.module.scss";
import {useDispatch} from "react-redux";
import {showModalWin} from "../../../../redux/actions/modalWinActionCreator";

function GroupComponent(props){

    const dispatch = useDispatch();

    const timetableClickHandle = (e)=>{
        dispatch(showModalWin({image: props.data.file, title: props.data.class_no}));
    }

    return(
        <div className={classes.wrapper} onClick={timetableClickHandle}>
            {props.data.class_no + " класс"}
        </div>
    )
}

export default GroupComponent;