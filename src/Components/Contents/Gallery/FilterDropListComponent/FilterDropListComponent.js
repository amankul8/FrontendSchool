import React from "react";
import classes from "./FilterDropListComponent.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {changeGalleryFilterValue} from "../../../../redux/actions/galleryPageActionCteator";


function FilterDropListComponent(){

    const titles_state = useSelector(state=>state.gallery_state.image_titles);
    const dispatch = useDispatch();

    const filterHandler = (title)=>{
        dispatch(changeGalleryFilterValue(title))
    }

    return(
        <nav className={classes.wrapper}>
            <div className={classes.title}> Чыпка </div>
            <div className={classes.list}>
                {
                    titles_state.data?titles_state.data.map((item, index)=>{
                        return(
                            <span onClick={()=>{filterHandler(item.title)}} key={index}>{item.title}</span>
                        )
                    }):null
                }
            </div>
        </nav>
    )
}

export default FilterDropListComponent;