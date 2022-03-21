import React from "react";
import AppScreen from "./AppScreen";
import Menu from "./Menu";
import "./Screen.scss"

const Screen = ({props})=>{

    let content;
    //when isEmpty is true, show menu else show the app screen
    if (props.isEmpty){
        content = <Menu props={props}/>;
    } else {
        content = <AppScreen title={props.currentMenu}/>;
    }

    return (
        <div id="screen">            
            {content}
        </div>
    );
}



export default Screen;