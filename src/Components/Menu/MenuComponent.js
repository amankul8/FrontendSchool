import React from "react";
import classes from "./MenuComponent.module.scss";
import MenuListComponent from "./MenuListComponent/MenuListComponent";
import MenuHeaderComponent from "./MenuHeaderComponent/MenuHeaderComponent";

function MenuComponent(){

    return(
        <div className={classes.menu_wrapper}>
            <div className={classes.block}>
                <MenuHeaderComponent/>
                <MenuListComponent/>
            </div>
            <div className={classes.menuFooter}>
                Көп жеген эрте семирет )
            </div>
        </div>
    )
}

export default MenuComponent;