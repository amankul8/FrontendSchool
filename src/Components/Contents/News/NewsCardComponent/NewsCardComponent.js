import React from "react";
import classes from "./NewsCardComponent.module.scss";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {show_current_news} from "../../../../redux/actions/newsPageActionCreator";

function NewsCardComponent(props){
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const newsCardHandler = (e, id)=>{
        e.preventDefault();
        dispatch(show_current_news(id));
        navigate(`/news/context/${id+1}`);
    }

    return(
        <div className={classes.card} onClick={(e)=>newsCardHandler(e, props.id)}>
            <div className={classes.thumbnail}>
                <img className={classes.left} src='https://www.akamai.com/site/im-demo/perceptual-standard.jpg?imbypass=true' alt=""/>
            </div>
            <div className={classes.right}>
                <h1>{props.data.News.title}</h1>

                <div className={classes.separator}></div>
                <p>{props.data.News.description.slice(0, 100)+" ..."}</p>
            </div>
            <h6>{props.data.News.created_at}</h6>
        </div>
    )
}


export default NewsCardComponent;