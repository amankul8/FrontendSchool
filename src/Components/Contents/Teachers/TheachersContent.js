import React, {useEffect} from "react";
import classes from "./TeachersContent.module.scss";
import HeaderComponent from "../../Header/HeaderComponent";
import ContentTitleComponent from "../ContentTitleComponent/ContentTitleComponent";
import TeacherCardComponent from "./TeacherCardComponent/TeacherCardComponent";
import {useDispatch, useSelector} from "react-redux";
import {loadTeachersData} from "../../../redux/actions/teachersPageActionCreator";
import ContentSpinner from "../../ContentSpinner/ContentSpinner";
import default_image from "../../../Images/default_image.jpg";

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
                        teachers_state.teachers.length!==0? teachers_state.teachers.map((item, index)=>{
                            return(
                                <TeacherCardComponent
                                    name={item.name}
                                    position={item.position}
                                    subject={item.lesson}
                                    achievement={item.progress}
                                    contacts={item.contacts}
                                    image={item.avatar||default_image}
                                    key={index}
                                />
                            )
                        }): "Азырча маалымат жок"
                }
            </div>
        </div>
    )
}

export default TeachersContent;