import React from "react";
import classes from "./ImageComponent.module.scss";
import {useDispatch} from "react-redux";
import {showModalWin} from "../../../../redux/actions/modalWinActionCreator";
import default_image from "../../../../Images/default_image.jpg"
import {changeErrorGalleryImage} from "../../../../redux/actions/galleryPageActionCteator";

function ImageComponent(props){

    const dispatch = useDispatch();
    const imageClickHandler = (e, image, title)=>{
        e.preventDefault();
        dispatch(showModalWin({image: image, title:title}));
    }

    const errorHandler = (id_1, id_2, image)=>{
        dispatch(changeErrorGalleryImage({id_1, id_2, image}));
    }

    return(
        props.data.file.map((item, index)=>{
            return(
                <div className={classes.wrapper} onClick={(e)=>{imageClickHandler(e, item.file, props.data.title)}} key={index}>
                    <div className={classes.image_wrapper}>
                        <img onError={()=>{errorHandler(props.id, index, default_image)}} src={item.file} alt=""/>
                    </div>
                    <div className={classes.text_wrapper}>
                        {props.data.title}
                    </div>
                </div>
            )
        })
    )
}

export default ImageComponent;