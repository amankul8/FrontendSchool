import React from "react";
import classes from "./FilterDropListComponent.module.scss";


function FilterDropListComponent(){

    return(
        <nav className={classes.wrapper}>
            <div className={classes.title}> Чыпка </div>
            <div className={classes.list}>
                <span>1-сентябрь</span>
                <span>Тил майрамы</span>
                <span>Мугалимдер күнү вамыв ывамы</span>
                <span>Спид күнү</span>
                <span>Революция</span>
            </div>
        </nav>
    )
}

export default FilterDropListComponent;