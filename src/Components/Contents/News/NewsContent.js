import React, {useEffect} from "react";
import classes from "./NewsContent.module.scss";
import HeaderComponent from "../../Header/HeaderComponent";
import ContentTitleComponent from "../ContentTitleComponent/ContentTitleComponent";
import NewsCardComponent from "./NewsCardComponent/NewsCardComponent";
import {useDispatch, useSelector} from "react-redux";
import ContentSpinner from "../../ContentSpinner/ContentSpinner";
import {load_news} from "../../../redux/actions/newsPageActionCreator";

function NewsContent(){

    const news_state = useSelector((state)=>state.news_state);
    const dispatch = useDispatch();

    useEffect(()=>{
        if(news_state.news.length===0){
            dispatch(load_news());
        }
    },[]);

    return(
        <div className={classes.home_content}>
            <HeaderComponent/>
            <ContentTitleComponent contentName="Жанылыктар"/>
            <div className={classes.content_block}>
                {
                    news_state.newsSpinner? <ContentSpinner/> :
                        news_state.news.map((item, index)=>{
                            return(
                                <NewsCardComponent data={item} key={index} id={index}/>
                            )
                        })
                }
            </div>
        </div>
    )
}

export default NewsContent;