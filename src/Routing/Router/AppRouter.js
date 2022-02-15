import React from "react";
import {Routes, Route} from "react-router-dom";
import appRoutes from "../Routes/AppRoutes";
import MainComponent from "../../Containers/MainComponent/MainComponent";


function AppRouter(){
    return(
        <Routes>
                {
                    appRoutes.getRoutes().map((item, index)=>{
                        return(
                            <Route exact={item.exact} path={item.path} element={<MainComponent content={item.content}/>} key={index}/>
                        )
                    })
                }
        </Routes>
    )
}
export default AppRouter;

