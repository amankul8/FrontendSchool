import React, {useEffect} from "react";
import classes from "./GloryBoard.module.scss";
import HeaderComponent from "../../Header/HeaderComponent";
import ContentTitleComponent from "../ContentTitleComponent/ContentTitleComponent";
import FilterComponent from "./FilterComponent/FilterComponent";
import ImageCardComponent from "./ImageCards/ImageCardComponent";
import {useDispatch, useSelector} from "react-redux";
import {loadGloryBoardData} from "../../../redux/actions/gloryBoardActionCreator";
import ContentSpinner from "../../ContentSpinner/ContentSpinner";

function GloryBoardContent(){
    let school_board_state = useSelector((state)=>state.school_board_state);
    let cur_fil_val = school_board_state.current_filter_value;
    const dispatch = useDispatch();

    useEffect(()=>{
        if(school_board_state.images.length===0){
            dispatch(loadGloryBoardData());
        }
    }, [])

    return(
        <div className={classes.home_content}>
            <HeaderComponent/>
            <ContentTitleComponent contentName="Ардак тактасы"/>
            <div className={classes.content_block}>
                <FilterComponent/>
                <div className={classes.context_wrapper}>
                    {
                        school_board_state.glory_board_spinner ? <ContentSpinner/>:
                            school_board_state.images.length!==0?school_board_state.images.filter(item=>item.glory_whom === cur_fil_val)
                                .map((item, index)=>{
                                return(
                                <ImageCardComponent data={item} key={index}/>
                            )
                        }): "Азырынча малымат жок"
                    }
                </div>
            </div>

        </div>
    )
}

export default GloryBoardContent;