import React from "react";
import classes from "./FeedbackContent.module.scss";
import HeaderComponent from "../../Header/HeaderComponent";
import ContentTitleComponent from "../ContentTitleComponent/ContentTitleComponent";
import telegram from "../../../Images/SocialNetworksIcons /Telegram.png";
import whatsapp from "../../../Images/SocialNetworksIcons /WhatsApp.png";
import instagram from "../../../Images/SocialNetworksIcons /Instagram.png";
import tik_tok from "../../../Images/SocialNetworksIcons /TikTok.png";
import facebook from "../../../Images/SocialNetworksIcons /Facebook.png";
import Telephone from "../../../Images/telephone.png";

function FeedbackContent(){

    return(
        <div className={classes.home_content}>
            <HeaderComponent/>
            <ContentTitleComponent contentName="Байланышуу"/>
            <div className={classes.content_block}>
                <div className={classes.address}>
                    <strong>Адрес: </strong>
                    <span>об.Талас; р.Манас; ул.Манас 188</span>
                </div>
                <div className={classes.tel_contacts}>
                    <strong>Телефон номерлер: </strong>
                    <div className={classes.number_list}>
                        <span> <img src={Telephone} alt=""/> +966500457862</span>
                        <span> <img src={Telephone} alt=""/> +966500457862</span>
                        <span> <img src={Telephone} alt=""/>  +966500457862</span>
                        <span> <img src={Telephone} alt=""/> +966500457862</span>
                    </div>
                </div>
                <div className={classes.social_media}>
                    <strong>Социалдык тармактар: </strong>
                    <div className={classes.media_list}>
                        <span>
                            <img src={telegram} alt=""/>
                            Телеграм
                        </span>
                        <span>
                            <img src={whatsapp} alt=""/>
                            WhatsApp
                        </span>
                        <span>
                            <img src={instagram} alt=""/>
                            Instagram
                        </span>
                        <span>
                            <img src={facebook} alt=""/>
                            Facebook
                        </span>
                        <span>
                            <img src={tik_tok} alt=""/>
                            Tik Tok
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeedbackContent;