import React from "react";
import classes from "./ImageCardComponent.module.scss";
import {useDispatch} from "react-redux";
import {showModalWin} from "../../../../redux/actions/modalWinActionCreator";

function ImageCardComponent(props){

    const dispatch = useDispatch();

    const imageClickHandler = (e)=>{
        dispatch(showModalWin({image: 'https://www.wgu.edu/content/dam/web-sites/blog-newsroom/blog/images/national/2020/august/professor.jpg', title: props.data.name+' '+props.data.class_no}));
    }

    return(
        <div className={classes.wrapper} onClick={imageClickHandler}>
            <div className={classes.image_wrapper}>
                <img src={'https://www.wgu.edu/content/dam/web-sites/blog-newsroom/blog/images/national/2020/august/professor.jpg'} alt=""/>
            </div>
            <div className={classes.text_wrapper}>
                {props.data.name+' '+props.data.class_no}
            </div>
        </div>
    )
}

export default ImageCardComponent;