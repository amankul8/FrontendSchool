import React from "react";
import classes from "./FilterComponent.module.scss";
import Button from "./Buttons/Button";

function FilterComponent(){

    return(
        <div className={classes.wrapper}>
            <div className={classes.filter}>
                <Button text="Мугалимдер"/>
                <Button text="Окуучулар"/>
            </div>
        </div>
    )
}

export default FilterComponent