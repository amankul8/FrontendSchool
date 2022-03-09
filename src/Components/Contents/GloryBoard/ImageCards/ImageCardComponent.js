import React from "react";
import classes from "./ImageCardComponent.module.scss";
import {useDispatch} from "react-redux";
import {showModalWin} from "../../../../redux/actions/modalWinActionCreator";
import default_image from "../../../../Images/default_image.jpg"
import {changeGloryBoardImage} from "../../../../redux/actions/gloryBoardActionCreator";

function ImageCardComponent(props){

    const dispatch = useDispatch();

    const imageClickHandler = (e)=>{
        dispatch(showModalWin({image: props.data.avatar, title: props.data.name+' '+props.data.class_no}));
    }

    const imageErrorHandler=(id, image)=>{
        dispatch(changeGloryBoardImage({id, image}));
    }

    return(
        <div className={classes.wrapper} onClick={imageClickHandler}>
            <div className={classes.image_wrapper}>
                <img onError={()=>{imageErrorHandler(props.data.id, default_image)}} src={props.data.avatar||default_image} alt=""/>
            </div>
            <div className={classes.text_wrapper}>
                {props.data.name||'No class' + ' '+props.data.class_no||'No class'}
            </div>
        </div>
    )
}

export default ImageCardComponent;