import React, {useEffect} from "react";
import classes from "./Gallery.module.scss";
import HeaderComponent from "../../Header/HeaderComponent";
import ContentTitleComponent from "../ContentTitleComponent/ContentTitleComponent";
import FilterDropListComponent from "./FilterDropListComponent/FilterDropListComponent";
import ImageComponent from "./ImagComponent/ImageComponent";
import {useDispatch, useSelector} from "react-redux";
import ContentSpinner from "./../../ContentSpinner/ContentSpinner.js";
import {loadGalleryData} from "../../../redux/actions/galleryPageActionCteator";

function GalleryContent(){

    const gallery_state = useSelector((state)=>state.gallery_state);
    const dispatch = useDispatch();

    useEffect(()=>{
        if(gallery_state.images.length===0){
            dispatch(loadGalleryData());
        }
    }, [])

    return(
        <div className={classes.home_content}>
            <HeaderComponent/>
            <ContentTitleComponent contentName="Фотогалерея"/>
            <div className={classes.content_block}>
                <div className={classes.filter_wrapper}>
                    <FilterDropListComponent/>
                </div>
                <div className={classes.image_block}>
                    {
                        gallery_state.gallery_spinner? <ContentSpinner/>:
                            gallery_state.images?.map((item0, index)=>{
                                return (
                                    item0.Gallery.file.map((item1, index)=>{
                                        return(
                                            <ImageComponent data={item1} title={item0.Gallery.title} key={index}/>
                                        )
                                    })
                                )
                            })
                    }
                </div>
            </div>
        </div>
    )
}

export default GalleryContent;