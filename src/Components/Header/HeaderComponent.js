import React from "react";
import classes from "./HeaderComponent.module.scss";
import Telegram from "../../Images/SocialNetworksIcons/t_gram.png";
import Instagram from "../../Images/SocialNetworksIcons/i_gram.png";
import Facebook from "../../Images/SocialNetworksIcons/f_book.png";
import TikTok from "../../Images/SocialNetworksIcons/t_tok.png";
import WhatsApp from "../../Images/SocialNetworksIcons/w_app.png";

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