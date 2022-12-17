import React, {useEffect} from "react";
import classes from "./Gallery.module.scss";
import HeaderComponent from "../../Header/HeaderComponent";
import ContentTitleComponent from "../ContentTitleComponent/ContentTitleComponent";
import ImageComponent from "./ImagComponent/ImageComponent";
import {useDispatch, useSelector} from "react-redux";
import ContentSpinner from "./../../ContentSpinner/ContentSpinner.js";
import {loadGalleryData} from "../../../redux/actions/galleryPageActionCteator";

function GalleryContent(){
    const gallery_state = useSelector((state)=>state.gallery_state);

    useEffect(()=>{
        if(gallery_state.images.length===0){
            dispatch(loadGalleryData());
        }
    }, [])

    const dispatch = useDispatch();
    let spinner = gallery_state.gallery_spinner;
    let image_filter = gallery_state.active_filter_value;
    return(
        <div className={classes.home_content}>
            <HeaderComponent/>
            <ContentTitleComponent contentName="Фотогалерея"/>
            <div className={classes.content_block}>
                <div className={classes.filter_wrapper}>
                </div>
                <div className={classes.image_block}>
                    {
                        spinner? <ContentSpinner/>:
                            gallery_state.images.length!==0?gallery_state.images.map((item, index)=>{
                                return(
                                    image_filter!==''?
                                        item.Gallery.title===image_filter?
                                            <ImageComponent data={item.Gallery} key={index} id={index}/>:
                                            null:
                                        <ImageComponent data={item.Gallery} key={index} id={index}/>
                                )
                            }): "Азырынча сурот жок"
                    }
                </div>
            </div>
        </div>
    )
}

export default GalleryContent;