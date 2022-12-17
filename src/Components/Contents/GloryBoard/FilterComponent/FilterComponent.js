import React from "react";
import classes from "./FilterComponent.module.scss";
import Button from "./Buttons/Button";
import {useDispatch} from "react-redux";
import {setGloryBoardCurrentFilterValue} from "../../../../redux/actions/gloryBoardActionCreator";

function FilterComponent(){

    const dispatch = useDispatch();

    return(
        <div className={classes.wrapper}>
            <div className={classes.filter}>
                <Button text="Мугалимдер" clickHandler={()=>{dispatch(setGloryBoardCurrentFilterValue('Мугалим'))}}/>
                <Button text="Окуучулар" clickHandler={()=>{dispatch(setGloryBoardCurrentFilterValue('Окуучу'))}}/>
            </div>
        </div>
    )
}

export default FilterComponent