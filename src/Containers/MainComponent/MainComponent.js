import React from "react";
import MenuComponent from "../../Components/Menu/MenuComponent";
import HeaderComponent from "../../Components/Header/HeaderComponent";
import classes from "./MainComponent.module.scss";

class MainComponent extends React.Component{

    render() {
        return(
            <div className={classes.main_wrapper}>
                <MenuComponent/>
                {this.props.content}
            </div>
        )
    }
}

export default MainComponent;