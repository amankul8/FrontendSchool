import React from "react";
import classes from "./NewsCardComponent.module.scss";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {changeNewsImage, show_current_news} from "../../../../redux/actions/newsPageActionCreator";
import news_default_image from "../../../../Images/news_default_image.jpeg";
import default_image from "../../../../Images/default_image.jpg";

function NewsCardComponent(props){
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const newsCardHandler = (e, id)=>{
        e.preventDefault();
        dispatch(show_current_news(id));
        navigate(`/news/context/${id+1}`);
    }

    const newsImageControl = (id, image)=>{
        dispatch(changeNewsImage({id, image}));
    }

    return(
        <div className={classes.card} onClick={(e)=>newsCardHandler(e, props.id)}>
            <img onError={()=>(newsImageControl(props.id, default_image))} src={props.data.file.length===0? news_default_image : props.data.file[0].file? props.data.file[0].file:news_default_image} alt=""/>
            <div className={classes.text_block}>
                <div>
                    <h5>{props.data.News.title}</h5>
                    <span>{props.data.News.created_at}</span>
                </div>
            </div>
        </div>
    )
}


export default NewsCardComponent;