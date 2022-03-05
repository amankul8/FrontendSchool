import React from "react";
import MenuComponent from "../../Components/Menu/MenuComponent";
import classes from "./MainComponent.module.scss";
import ModalWindow from "../../Components/ImageModalWindow/ModalWindow";
import {connect} from "react-redux";
import LoadModalWindow from "../../Components/LoadModalWindow/LoadModalWindow";
class MainComponent extends React.Component{


    render() {
        return(
            <div className={classes.main_wrapper}>
                {this.props.modal_win_state.active ? <ModalWindow/> : null}
                {this.props.modal_win_state.load_modal_window ? <LoadModalWindow/> : null}
                <MenuComponent/>
                {this.props.content}
            </div>
        )
    }
}

const mapStateToProps=(state=>{
    return{
        modal_win_state: state.modal_window_state
    }
})

// const mapDispatchToProps = {
//     loadHomeAboutData
// }

export default  connect(mapStateToProps, null)(MainComponent);