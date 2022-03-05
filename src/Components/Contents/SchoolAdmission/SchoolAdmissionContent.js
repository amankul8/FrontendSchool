import React from "react";
import classes from "../Home/HomeContent.module.scss";
import HeaderComponent from "../../Header/HeaderComponent";
import ContentTitleComponent from "../ContentTitleComponent/ContentTitleComponent"
import {useSelector} from "react-redux";

function SchoolAdmissionContent(){

    const school_admission_state = useSelector((state)=>state.school_admission_state)

    return(

        <div className={classes.home_content}>
            <HeaderComponent/>
            <ContentTitleComponent contentName="Мектепке кабыл алуу"/>
            <div className={classes.content_block}>
                { school_admission_state.text }
            </div>
        </div>
    )
}

export default SchoolAdmissionContent;