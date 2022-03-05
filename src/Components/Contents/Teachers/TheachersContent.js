import React, {useEffect} from "react";
import classes from "./TeachersContent.module.scss";
import HeaderComponent from "../../Header/HeaderComponent";
import ContentTitleComponent from "../ContentTitleComponent/ContentTitleComponent";
import TeacherCardComponent from "./TeacherCardComponent/TeacherCardComponent";
import {useDispatch, useSelector} from "react-redux";
import {loadTeachersData} from "../../../redux/actions/teachersPageActionCreator";
import ContentSpinner from "../../ContentSpinner/ContentSpinner";

function TeachersContent(){

    let teachers_state = useSelector((state)=>state.teachers_state);
    const dispatch = useDispatch();
    useEffect(()=>{
        if(teachers_state.teachers.length===0){
            dispatch(loadTeachersData());
        }
    }, [])

    return(

        <div className={classes.home_content}>
            <HeaderComponent/>
            <ContentTitleComponent contentName="Мугалимдер"/>
            <div className={classes.content_block}>
                {
                    teachers_state.teachers_spinner? <ContentSpinner/>:
                        teachers_state.teachers.map((item, index)=>{
                            return(
                                <TeacherCardComponent
                                    name={item.name}
                                    position={item.position}
                                    subject={item.lesson}
                                    achievement={item.progress}
                                    contacts={item.contacts}
                                    image={'https://cdn.vox-cdn.com/thumbor/xfYTqC9OomTEx0B1fPo_FLWFwbg=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22488210/Chalkbeat_20210503_EDUImages_AllisonShelleyEDUImages_004.jpg'}
                                    key={index}
                                />
                            )
                        })
                }
            </div>
        </div>
    )
}

export default TeachersContent;