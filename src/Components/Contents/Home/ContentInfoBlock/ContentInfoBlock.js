import React from "react";
import classes from "./ContentInfoBlock.module.scss";
import default_image from "../../../../Images/default_image.jpg"
import {changeHomeInfoBlocksImageLink} from "../../../../redux/actions/homePageActionCreator";
import {useDispatch} from "react-redux";
import {baseFileUrl} from "../../../../appConfig/config";


function ContentInfoBlock(props){

    const dispatch = useDispatch();

    const imgControlHandler = (id_1, id_2, image)=>{
        dispatch(changeHomeInfoBlocksImageLink({id_1, id_2, image}));
    }

    return(
        <div className={classes.info_block_wrapper}>
            <div className={classes.block_title}>
                {props.data.title}
            </div>
            <div className={classes.image_block}>
                {
                    props.data.file.length!==0?
                        props.data.file.map((item, index)=>{
                            return(
                                <img onError={()=>{imgControlHandler(props.id, index, default_image)}} src={item.file||default_image} alt="" key={index}/>
                            )
                        }): <img src={default_image} alt=""/>
                }
            </div>
            <div className={classes.text_block}>
                {props.data.description}
            </div>
        </div>
    )
}

export default ContentInfoBlock;