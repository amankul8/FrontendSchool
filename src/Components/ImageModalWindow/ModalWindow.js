import React from "react";
import classes from './ModalWindow.module.scss';
import closes_eye from "./../../Images/closed_eye.png"
import ImageModalComponent from "./ImageModalComponent/ImageModalComponent";
import {useDispatch, useSelector} from "react-redux";
import {closeModalWin} from "../../redux/actions/modalWinActionCreator";

function ModalWindow(){

    const dispatch = useDispatch();
    const modal_window_state = useSelector(state=>state.modal_window_state);
    const modalWindowCloseHandler = ()=>{
        dispatch(closeModalWin());
    }

    return(
        <div className={classes.modal_window_wrapper}>
            <div className={classes.close_modal_window}>
                <div className={classes.close_icon} onClick={modalWindowCloseHandler}>
                    <img src={closes_eye} alt=""/>
                </div>
            </div>
            <ImageModalComponent image={modal_window_state.content.image} title={modal_window_state.content.title}/>
        </div>
    )
}

export default ModalWindow;