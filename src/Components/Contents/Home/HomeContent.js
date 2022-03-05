import React, {useEffect} from "react";
import classes from "./HomeContent.module.scss";
import HeaderComponent from "../../Header/HeaderComponent";
import SliderComponent from "./SliderComponent/SliderComponent";
import ContentTitleComponent from "../ContentTitleComponent/ContentTitleComponent";
import ContentInfoBlock from "./ContentInfoBlock/ContentInfoBlock";
import {useSelector, useDispatch} from "react-redux";
import {loadHomeAboutData} from "../../../redux/actions/homePageActionCreator";
import ContentSpinner from "../../ContentSpinner/ContentSpinner";

function HomeContent(){

    let home_state = useSelector((state)=>state.home_state);
    const dispatch = useDispatch();

    useEffect(()=>{
        if(home_state.info_blocks.length===0){
            dispatch(loadHomeAboutData());
        }
    }, []);

    return(
        <div className={classes.home_content}>
            <HeaderComponent/>
            <ContentTitleComponent contentName="Башкы"/>
            <div className={classes.content_block}>
                <SliderComponent slides={home_state.slides}/>
                {
                    home_state.info_block_spinner ? <ContentSpinner/>:
                        home_state.info_blocks.map((item, index)=>{
                            return(
                                <ContentInfoBlock data={item} key={index}/>
                            )
                        })
                }
            </div>
        </div>
    )
}

export default HomeContent;