import React from "react";
import classes from "./FeedbackContent.module.scss";
import HeaderComponent from "../../Header/HeaderComponent";
import ContentTitleComponent from "../ContentTitleComponent/ContentTitleComponent";
import telegram from "../../../Images/SocialNetworksIcons/t_gram.png";
import whatsapp from "../../../Images/SocialNetworksIcons/w_app.png";
import instagram from "../../../Images/SocialNetworksIcons/i_gram.png";
import tik_tok from "../../../Images/SocialNetworksIcons/t_tok.png";
import facebook from "../../../Images/SocialNetworksIcons/f_book.png";
import Telephone from "../../../Images/telephone.png";

function FeedbackContent(){

    const socMediaClickHandler=()=>{
        alert("Азырынча маалымат жок")
    }

    return(
        <div className={classes.home_content}>
            <HeaderComponent/>
            <ContentTitleComponent contentName="Байланышуу"/>
            <div className={classes.content_block}>
                <div className={classes.address}>
                    <strong>Адрес: </strong>
                    <span> Талас шаары, А.Оторбаев көчөсү №253</span>
                </div>
                <div className={classes.tel_contacts}>
                    <strong>Уюлдук телефон: </strong>
                    <div className={classes.number_list}>
                        <span> <img src={Telephone} alt=""/> +966703307390</span>
                    </div>

                </div>
                <div className={classes.tel_contacts}>
                    <strong>Электрондук почта: </strong>
                    <div className={classes.number_list}>
                        <span>osmonalievagulsaira1976@gmail.com</span>
                    </div>
                </div>
                <div className={classes.social_media}>
                    <strong>Социалдык тармактар: </strong>
                    <div className={classes.media_list}>
                        <span onClick={socMediaClickHandler}>
                            <img src={telegram} alt=""/>
                            Телеграм
                        </span >
                        <span onClick={socMediaClickHandler}>
                            <img src={whatsapp} alt=""/>
                            WhatsApp
                        </span>
                        <span onClick={socMediaClickHandler}>
                            <img src={instagram} alt=""/>
                            Instagram
                        </span>
                        <span onClick={socMediaClickHandler}>
                            <img src={facebook} alt=""/>
                            Facebook
                        </span>
                        <span onClick={socMediaClickHandler}>
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