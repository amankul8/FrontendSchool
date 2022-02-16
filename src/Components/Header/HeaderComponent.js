import React from "react";
import classes from "./HeaderComponent.module.scss";
import Telegram from "../../Images/SocialNetworksIcons /Telegram.png";
import Instagram from "../../Images/SocialNetworksIcons /Instagram.png";
import Facebook from "../../Images/SocialNetworksIcons /Facebook.png";
import TikTok from "../../Images/SocialNetworksIcons /TikTok.png";
import WhatsApp from "../../Images/SocialNetworksIcons /WhatsApp.png";

function HeaderComponent(){

    return(
        <div className={classes.header_wrapper}>
            <div className={classes.icons_block}>
                <img src={Telegram} alt=""/>
                <img src={Instagram} alt=""/>
                <img src={TikTok} alt=""/>
                <img src={Facebook} alt=""/>
                <img src={WhatsApp} alt=""/>
            </div>
        </div>
    )
}

export default HeaderComponent;