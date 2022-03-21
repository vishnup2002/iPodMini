import React from "react";
import "./MenuItem.scss"

const MenuItem = ({props}) => {


    // classname=active when highlighted and classname=inactive when not highlighted
    return (
        <div className={((props.active&&"active")||"inactive")+" menuitem"} >
            <h3 style={(props.active && {color:"white"})||{}}>
                {props.title} 
                <span style={{color:"white"}} className="right-arrow">{props.active && ">"}</span>
            </h3>
        </div>
    )
}

export default MenuItem;