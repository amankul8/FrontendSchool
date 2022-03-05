import React from "react";
import classes from "./FilterComponent.module.scss";
import Button from "./Buttons/Button";

function FilterComponent(){

    return(
        <div className={classes.wrapper}>
            <div className={classes.filter}>
                <Button text="Мугалимдерге"/>
                <Button text="Окуучуларга"/>
                <Button text="Ата-энелерге"/>
            </div>
        </div>
    )
}

export default FilterComponent