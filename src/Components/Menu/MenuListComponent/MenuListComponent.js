import React from "react";
import classes from "./MenuListComponent.module.scss";
import menuUrls from "../../../Routing/Routes/MenuUrls";
import MenuListLink from "./MenuListLink/MenuListLink";

function MenuListComponent(){

    return (
        <div className={classes.list_wrapper}>
            {
                menuUrls.getMenuList().map((item, index)=>{
                    return(
                        <MenuListLink item={item} key={index}/>
                    )
                })
            }
        </div>
    )
}

export default MenuListComponent;