import React from "react";
import classes from "./NewsContext.module.scss";
import {useSelector} from "react-redux";
import {Navigate, useNavigate} from "react-router-dom";
import HeaderComponent from "../../../Header/HeaderComponent";
import ContentTitleComponent from "../../ContentTitleComponent/ContentTitleComponent";

function NewsContext(props){

    const navigate = useNavigate();
    const news_state = useSelector((state)=>state.news_state);
    const index = news_state.currentNews;
        const goBack = (e)=>{
        e.preventDefault();
        navigate(-1);
    }
    if(index===false){
        return (
            <Navigate to="/"/>
        )
    }else{
        return(
            <div className={classes.home_content}>
                <HeaderComponent/>
                <ContentTitleComponent contentName="Жанылык"/>
                <div className={classes.context_wrapper}>
                    <button onClick={goBack}>{"<-Артка "}</button>
                    <strong>{news_state.news[index].News.title}</strong>
                    <p>
                        {news_state.news[index].News.description}
                    </p>
                    <span>
                        Дата: {news_state.news[index].News.created_at}
                    </span>
                    {
                        news_state.news[index].News.file?.file? <img src='https://media-s3-us-east-1.ceros.com/getty-images-services/images/2021/02/17/873fbbf6e4e681de0a096047fbba095d/da-20-0630.jpg' alt=""/>:
                            <img src='https://media-s3-us-east-1.ceros.com/getty-images-services/images/2021/02/17/873fbbf6e4e681de0a096047fbba095d/da-20-0630.jpg' alt=""/>
                    }
                </div>
            </div>
        )
    }

}

export default NewsContext;