import React, {useEffect} from "react";
import classes from "./HomeContent.module.scss";
import HeaderComponent from "../../Header/HeaderComponent";
import SliderComponent from "./SliderComponent/SliderComponent";
import ContentTitleComponent from "../ContentTitleComponent/ContentTitleComponent";
import ContentInfoBlock from "./ContentInfoBlock/ContentInfoBlock";
import {useSelector, useDispatch} from "react-redux";
import {loadHomeAboutData} from "../../../redux/actions/homePageActionCreator";
import ContentSpinner from "../../ContentSpinner/ContentSpinner";

const slides = [
    {
        title: 'asdfasd',
        subtitle: 'asdfvasdf',
        file: 'https://upload.wikimedia.org/wikipedia/commons/6/63/Humboldt_High_School_1920.jpg'
    },
    {
        title: 'asdfas',
        subtitle: 'asfvasdf',
        file: 'https://c8.alamy.com/comp/KMMWE9/a-school-class-france-1920s-KMMWE9.jpg'
    }
]

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
                <SliderComponent slides={slides}/>
                {
                    home_state.info_block_spinner? <ContentSpinner/>:
                        home_state.info_blocks.length!==0 ?
                            home_state.info_blocks.map((item, index)=>{
                            return(
                                <ContentInfoBlock data={item} key={index} id={index}/>
                            )
                        }) : "Азырынча маалымат жок"
                }
            </div>
        </div>
    )
}

export default HomeContent;