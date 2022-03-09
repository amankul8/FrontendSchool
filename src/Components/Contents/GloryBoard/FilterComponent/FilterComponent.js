import React from "react";
import classes from "./FilterComponent.module.scss";
import Button from "./Buttons/Button";
import {useDispatch} from "react-redux";
import {setGloryBoardCurrentFilterValue} from "../../../../redux/actions/gloryBoardActionCreator";

function FilterComponent(){

    const dispatch = useDispatch();

    function gloryFilterHandler(type){
        if(type==='t'){
            dispatch(setGloryBoardCurrentFilterValue('Мугалим'));
        }else{
            dispatch(setGloryBoardCurrentFilterValue('Окуучу'));
        }
    }

    return(
        <div className={classes.wrapper}>
            <div className={classes.filter}>
                <Button text="Мугалимдер" clickHandler={()=>{gloryFilterHandler('t')}}/>
                <Button text="Окуучулар" clickHandler={()=>{gloryFilterHandler('o')}}/>
            </div>
        </div>
    )
}

export default FilterComponent