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
                <Button text="Мугалимдер учун" clickHandler={()=>{noticeFilterHandler("Мугалимдер учун")}}/>
                <Button text="Окуучулар учун" clickHandler={()=>{noticeFilterHandler("Окуучулар учун")}}/>
                <Button text="Ата-энелер учун" clickHandler={()=>{noticeFilterHandler("Ата-энелер учун")}}/>
            </div>
        </div>
    )
}

export default FilterComponent