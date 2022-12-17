import React from "react";
import classes from "./FilterComponent.module.scss";
import Button from "./Buttons/Button";
import {useDispatch} from "react-redux";
import {setCurrentNoticeFilterValue} from "../../../../redux/actions/notificationActionCreator";

function FilterComponent(){

    const dispatch = useDispatch();

    const noticeFilterHandler = (type)=>{
        dispatch(setCurrentNoticeFilterValue(type));
    }

    return(
        <div className={classes.wrapper}>
            <div className={classes.filter}>
                <Button text="Мугалимдер" clickHandler={()=>{noticeFilterHandler("Мугалимдер үчүн")}}/>
                <Button text="Окуучулар" clickHandler={()=>{noticeFilterHandler("Окуучулар үчүн")}}/>
                <Button text="Ата-энелер" clickHandler={()=>{noticeFilterHandler("Ата-энелер үчүн")}}/>
                <Button text="Жалпы" clickHandler={()=>{noticeFilterHandler("all")}}/>
            </div>
        </div>
    )
}

export default FilterComponent