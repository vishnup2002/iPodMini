import React from "react";
import MenuItem from "./MenuItem";
import './Menu.scss'

const Menu = ({props})=>{
    const {items,index,currentMenu} = props;

    return(
        <div id="menu">
            <div id="menu-title"><h1>{currentMenu}</h1></div>
            {items.map((ele,i)=>{
                return (
                    <MenuItem 
                        props={{
                            title: ele,
                            active: index===i||false,
                    
                        }}
                
                        key={i}
                    />
                )
        
                }
            )}
        </div>
    )
    
}

export default Menu;