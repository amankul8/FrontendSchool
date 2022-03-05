import React from "react";
import classes from "./ImageComponent.module.scss";
import {useDispatch} from "react-redux";
import {showModalWin} from "../../../../redux/actions/modalWinActionCreator";

function ImageComponent(props){

    const dispatch = useDispatch();
    const imageClickHandler = (e)=>{
        e.preventDefault();
        dispatch(showModalWin({image: props.Gallery.image, title: props.title}));
    }

    return(
        <div className={classes.wrapper} onClick={imageClickHandler}>
            <div className={classes.image_wrapper}>
                <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' alt=""/>
            </div>
            <div className={classes.text_wrapper}>
                {props.title}
            </div>
        </div>
    )
}

export default ImageComponent;