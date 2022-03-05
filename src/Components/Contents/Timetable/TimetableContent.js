import React, {useEffect} from "react";
import classes from "./TimetableContent.module.scss";
import HeaderComponent from "../../Header/HeaderComponent";
import ContentTitleComponent from "../ContentTitleComponent/ContentTitleComponent";
import GroupComponent from "./GroupComponent/GroupComponent";
import {useSelector, useDispatch} from "react-redux";
import {loadTimetableData} from "../../../redux/actions/timetableActionCreator";
import ContentSpinner from "../../ContentSpinner/ContentSpinner";

function TimetableContent(){

    const timetable_state = useSelector(state=>state.timetable_state);
    const dispatch = useDispatch();

    useEffect(()=>{
        if(timetable_state.timetables.length===0){
            dispatch(loadTimetableData());
        }
    }, [])

    return(
        <div className={classes.home_content}>
            <HeaderComponent/>
            <ContentTitleComponent contentName="Расписание"/>
            <div className={classes.content_block}>
                {
                    timetable_state?.timetable_spinner?<ContentSpinner/>:
                        timetable_state.timetables.map((item, index)=>{
                            return(
                                <GroupComponent data={item} key={index}/>
                            )
                        })
                }
            </div>
        </div>
    )
}

export default TimetableContent;