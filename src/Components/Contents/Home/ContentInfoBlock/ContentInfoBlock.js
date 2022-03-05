import React from "react";
import classes from "./ContentInfoBlock.module.scss";


function ContentInfoBlock(props){

    return(
        <div className={classes.info_block_wrapper}>
            <div className={classes.block_title}>
                {props.data.title}
            </div>
            <div className={classes.image_block}>
                <img src='https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg' alt=""/>
            </div>
            <div className={classes.text_block}>
                {props.data.description}
            </div>
        </div>
    )
}

export default ContentInfoBlock;