import React, {useEffect, useRef, useState} from "react";
import classes from "./akkreditatsiyaStyle.module.scss";
import HeaderComponent from "../../Header/HeaderComponent";
import ContentTitleComponent from "../ContentTitleComponent/ContentTitleComponent";
import {useDispatch, useSelector} from "react-redux";
import {akkrLoadData} from "../../../redux/actions/akkrActions";
import ContentSpinner from "../../ContentSpinner/ContentSpinner";

function Akkreditatsiya(props){

    let [filter, setFilter] = useState('Программалык');
    const akkr_docs = useSelector((state)=>state.akkreditatsiya_state);
    const dispatch = useDispatch();
    useEffect(()=>{
        if(akkr_docs.docs.length===0){
            dispatch(akkrLoadData());
        }
    }, []);
    const p_ref = useRef();
    const i_ref = useRef();

    function filterHandler(value){
        setFilter(value);
        if(value==='Программалык'){
            p_ref.current.classList.add(classes.active);
            i_ref.current.classList.remove(classes.active);
        }else{
            i_ref.current.classList.add(classes.active);
            p_ref.current.classList.remove(classes.active);
        }
    }

    let docs = akkr_docs.docs.filter(item=>item.type===filter);

    return(
        <div className={classes.wrapper}>
            <HeaderComponent/>
            <ContentTitleComponent contentName="Аккредитация"/>
            <div className={classes.content}>
                <div className={classes.filter_wrapper}>
                    <button className={classes.filter_button} ref={p_ref} onClick={()=>{filterHandler('Программалык')}}>
                        Программалык
                    </button>
                    <button className={classes.filter_button} ref={i_ref} onClick={()=>{filterHandler('Институционалдык')}}>
                        Институционалдык
                    </button>
                </div>

                {
                    akkr_docs.page_spinner ? <ContentSpinner/> :
                        docs.length !== 0 ?
                            <>
                                <div className={classes.doc_block}>
                                    <div className={classes.index}>
                                        <strong>№</strong>
                                    </div>
                                    <div className={classes.title}>
                                        <strong>Иш кагаз аты</strong>
                                    </div>
                                    <div className={classes.type}>
                                        <strong>Тип</strong>
                                    </div>
                                    <div className={classes.docs_link}>
                                        <strong>Көчүрүп алуу</strong>
                                    </div>
                                </div>
                                {
                                    docs.map((item, index) => {
                                        return (

                                            <div className={classes.doc_block} key={index}>
                                                <div className={classes.index}>
                                                    {index + 1}
                                                </div>
                                                <div className={classes.title}>
                                                    {item.title}
                                                </div>
                                                <div className={classes.type}>
                                                    {item.type.slice(0,6)}...
                                                </div>
                                                <div className={classes.docs_link}>
                                                    <div className={classes.docs_drop}>
                                                        {
                                                            item.file?
                                                                <a className={classes.a} href={item.file}
                                                                   download={true}> Көчүрүп алуу </a> :
                                                                <span className={classes.span}>
                                                                 Көчүрүүгө болбойт
                                                            </span>
                                                        }
                                                    </div>
                                                </div>
                                            </div>

                                        )
                                    })
                                }
                            </> :
                            "Азырынча маалымат жок"
                }
            </div>
        </div>
    )
}

export default Akkreditatsiya;

