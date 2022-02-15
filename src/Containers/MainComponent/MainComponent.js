import React from "react";

class MainComponent extends React.Component{

    render() {
        return(
            <>
                {this.props.content}
            </>
        )
    }
}

export default MainComponent;