import React, {useEffect} from "react";
import classes from "./SchoolAdmissionContent.module.scss";
import HeaderComponent from "../../Header/HeaderComponent";
import ContentTitleComponent from "../ContentTitleComponent/ContentTitleComponent"
import {useDispatch, useSelector} from "react-redux";
import {loadSchAdmData} from "../../../redux/actions/notificationActionCreator";
import ContentSpinner from "../../ContentSpinner/ContentSpinner";

function SchoolAdmissionContent(){

    const school_admission_state = useSelector((state)=>state.school_admission_state)
    const dispatch = useDispatch();

    useEffect(()=>{
        if(school_admission_state.data===''){
            dispatch(loadSchAdmData());
        }
    }, []);

    return(
        <div className={classes.home_content}>
            <HeaderComponent/>
            <ContentTitleComponent contentName="Мектепке кабыл алуу"/>
            {
                school_admission_state.sch_ad_spinner?<ContentSpinner/>:
                    school_admission_state.data!==''?
                    <div className={classes.content_block}>
                        <div className={classes.title_block}>
                            {school_admission_state.data.title || 'No Title'}
                        </div>
                        <div className={classes.text_block} dangerouslySetInnerHTML={{__html: school_admission_state.data.description}}/>
                        {
                            school_admission_state.data.file.length!==0?
                                school_admission_state.data.file.map((item, index)=>{
                                    return(
                                        <div className={classes.doc} key={index}>
                                            <span>
                                                {item.title+" :"}
                                            </span>
                                            <a href={item.file} download={true}> Ачып көрүү </a>
                                            <a href={item.file} download={true}> Kөчүрүп алуу </a>
                                        </div>
                                    )
                                }): ""
                        }
                    </div>: <p>Азырынча маалымат жок</p>
            }
        </div>
    )
}

export default SchoolAdmissionContent;