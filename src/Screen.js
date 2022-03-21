import React from "react";
import Menu from "./Menu";
import "./Screen.scss"

const Screen = ({props})=>{
    return (
        <div id="screen">
            <Menu props={props}/>
        </div>
    );
}



export default Screen;