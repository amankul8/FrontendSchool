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
                <Button text="Мугалимдер учун" clickHandler={()=>{noticeFilterHandler("M")}}/>
                <Button text="Окуучулар учун" clickHandler={()=>{noticeFilterHandler("O")}}/>
                <Button text="Ата-энелер учун" clickHandler={()=>{noticeFilterHandler("P")}}/>
                <Button text="All" clickHandler={()=>{noticeFilterHandler("all")}}/>
            </div>
        </div>
    )
}

export default FilterComponent