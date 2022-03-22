import React from "react";
import './Controller.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faForwardFast,faBackwardFast, faPlay } from '@fortawesome/free-solid-svg-icons'
import ZingTouch from 'zingtouch';

class Controller extends React.Component{

    componentDidMount(){

        //handling rotation/wheel-scroll event
        let zt = new ZingTouch.Region(document.body);
        var myElement = document.getElementById('outerWheel');
        let currentAngle = 0;
        zt.bind(myElement, 'rotate', (e)=>{
            currentAngle+=e.detail.distanceFromLast;
            if (currentAngle>15){
                
                currentAngle=0;
                this.props.actions.onScroll(1);
            } else if (currentAngle<-15){
                currentAngle = 0;
                this.props.actions.onScroll(-1);
            }
        }, false);
    }

    render(){

        //register event listener on homebutton only when menu is available
        let homeButtton;
        if (this.props.isEmpty){
            homeButtton = <button id="innerWheel" onClick={()=>{this.props.actions.onHomeClick(this.props.index)}} onTouchStart={()=>{this.props.actions.onHomeClick(this.props.index)}}></button>
        } else {
            homeButtton = <button id="innerWheel"></button>
        }

        //handling click events on play buttton only when on the all songs screen
        let playButton; 
        if (this.props.currentMenu === "all songs"){
            playButton = <button id = "down" onClick={this.props.actions.onPlayClick} onTouchStart={this.props.actions.onPlayClick}>
                        <FontAwesomeIcon icon={faPlay} />
                        </button>
            


        } else {
            playButton = <button id = "down">
                        <FontAwesomeIcon icon={faPlay} />
                        </button>
            
        }

        return (
            <div id="outerBox">
                <div id="outerWheel">
                    {homeButtton}
                    <button id = "left">
                        <FontAwesomeIcon icon={faBackwardFast} />
                    </button>

                    <button id = "right">
                        <FontAwesomeIcon icon={faForwardFast} />
                    </button>
                    
                    <button id = "up" onTouchStart={this.props.actions.onMenuClick} onClick={this.props.actions.onMenuClick}>
                        MENU
                    </button>
                    {playButton}

                </div>
            </div>
        )
    }

}

export default Controller;