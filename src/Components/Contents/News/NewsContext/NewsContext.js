import React from "react";
import classes from "./NewsContext.module.scss";
import {useSelector} from "react-redux";
import {Navigate, useNavigate} from "react-router-dom";
import HeaderComponent from "../../../Header/HeaderComponent";
import ContentTitleComponent from "../../ContentTitleComponent/ContentTitleComponent";
import news_default_image from "./../../../../Images/news_default_image.jpeg";

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
            <Navigate to="/news"/>
        )
    }else{
        return(
            <div className={classes.home_content}>
                <HeaderComponent/>
                <ContentTitleComponent contentName="Жанылык"/>
                <div className={classes.context_wrapper}>
                    <button onClick={goBack}>{"<-Артка "}</button>
                    <strong>{news_state.news[index].News.title?news_state.news[index].News.title:"No title"}</strong>
                    <p>
                        {news_state.news[index].News.description?news_state.news[index].News.description:"No description"}
                    </p>
                    <span>
                        Дата: {news_state.news[index].News.created_at?news_state.news[index].News.created_at:"No date"}
                    </span>
                    {

                        <img src={news_state.news[index].News.file.length===0? news_default_image: news_state.news[index].News.file[0].file} alt=""/>
                    }
                </div>
            </div>
        )
    }

}

export default NewsContext;