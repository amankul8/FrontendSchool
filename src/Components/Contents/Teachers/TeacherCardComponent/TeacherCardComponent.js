import React from "react";
import classes from "./TeacherCardComponent.module.scss";

function TeacherCardComponent(props){

    return(
        <div className={classes.wrapper}>
            <div className={classes.teacher_image}>
                <img src={props.image} alt=""/>
            </div>
            <div className={classes.teacher_info}>
                <div className={classes.text_block}>
                    <span className={classes.title}>Аты</span>
                    <span className={classes.description }>{props.name}</span>
                </div>
                <div className={classes.text_block}>
                    <span className={classes.title}>Должность</span>
                    <span className={classes.description }>{props.position}</span>
                </div>
                <div className={classes.text_block}>
                    <span className={classes.title}>Сабак</span>
                    <span className={classes.description }>{props.subject}</span>
                </div>
                <div className={classes.text_block}>
                    <span className={classes.title}>Ийгиликтери</span>
                    <span className={classes.description }>{props.achievement}</span>
                </div>
                <div className={classes.text_block}>
                    <span className={classes.title}>Байланышуу</span>
                    <span className={classes.description }>{props.contacts}</span>
                </div>

            </div>
        </div>
    )
}

export default TeacherCardComponent;