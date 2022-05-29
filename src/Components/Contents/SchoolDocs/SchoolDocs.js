import React, {useEffect} from "react";
import classes from "./SchoolDocs.module.scss";
import HeaderComponent from "../../Header/HeaderComponent";
import ContentTitleComponent from "../ContentTitleComponent/ContentTitleComponent"
import {useDispatch, useSelector} from "react-redux";
import {schoolDocsLoadData} from "../../../redux/actions/schoolDocsActionCreator";
import ContentSpinner from "../../ContentSpinner/ContentSpinner";

function SchoolDocs(){

    const school_docs = useSelector((state)=>state.school_docs_state);
    const dispatch = useDispatch();
    useEffect(()=>{
        if(school_docs.docs.length===0){
            dispatch(schoolDocsLoadData());
        }
    }, [])

    let docListRef = React.createRef();

    return(
        <div className={classes.home_content}>
            <HeaderComponent/>
            <ContentTitleComponent contentName="Мектеп иш кагаздары"/>

            {
                school_docs.page_spinner?<ContentSpinner/>:
                    school_docs.docs.length!==0 ?
                        <div className={classes.content_block}>
                            <div className={classes.doc_block}>
                                <div className={classes.index}>
                                    <strong>№</strong>
                                </div>
                                <div className={classes.title}>
                                    <strong>Иш кагаз аты</strong>
                                </div>
                                <div className={classes.date}>
                                    <strong>Жүктөлгөн</strong>
                                </div>
                                <div className={classes.docs_link}>
                                    <strong>Көчүрүп алуу</strong>
                                </div>
                            </div>
                            {
                                school_docs.docs.map((item, index)=>{
                                    return(

                                        <div className={classes.doc_block} key={index}>
                                            <div className={classes.index}>
                                                {index+1}
                                            </div>
                                            <div className={classes.title}>
                                                {item.title}
                                            </div>
                                            <div className={classes.date}>
                                                {item.created_at}
                                            </div>
                                            <div className={classes.docs_link}>
                                                <div className={classes.docs_drop}>
                                                    {
                                                        item.file.length!==0?
                                                            <a className={classes.a} href={item.file[0].file} download={true}> Көчүрүп алуу </a>:
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
                        </div>:
                        "Азырынча маалымат жок"
            }

        </div>
    )
}

export default SchoolDocs;