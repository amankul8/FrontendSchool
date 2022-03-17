import React from "react";
import classes from "./MenuComponent.module.scss";
import MenuListComponent from "./MenuListComponent/MenuListComponent";
import MenuHeaderComponent from "./MenuHeaderComponent/MenuHeaderComponent";
import menuCloseIcon from "../../Images/menu_close_icon.png";
import {useDispatch, useSelector} from "react-redux";
import {closeMenu} from "../../redux/actions/modalWinActionCreator";

function MenuComponent(){

    let cls  = [classes.menu_wrapper];
    let menuRef = React.createRef();
    let menu_status = useSelector(state=>state.modal_window_state.menu_status);
    const dispatch = useDispatch();

    const closeMenuHandler = ()=> {
        dispatch(closeMenu());
    }

    if(menu_status){
        cls.push(classes.menu_active)
    }else{
        if(cls.length >= 2){
            cls.pop();
        }
    }
    return(
        <div ref={menuRef} className={cls.join(' ')}>
            <div className={classes.menu_closing_icon} onClick={closeMenuHandler}>
                <img src={menuCloseIcon} alt=""/>
            </div>
            <div className={classes.block}>
                <MenuHeaderComponent />
                <MenuListComponent/>
            </div>
            <div className={classes.menuFooter}>
                @redtrace.kg
            </div>
        </div>
    )
}

export default MenuComponent;