import React from "react";
import './Controller.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faForwardFast,faBackwardFast, faPlay } from '@fortawesome/free-solid-svg-icons'
import ZingTouch from 'zingtouch';

class Controller extends React.Component{

    componentDidMount(){
        let zt = new ZingTouch.Region(document.body);
        var myElement = document.getElementById('outerWheel');
        
        let currentAngle = 0;
        zt.bind(myElement, 'rotate', (e)=>{
            currentAngle+=e.detail.distanceFromLast;
            if (currentAngle>15){
                currentAngle=0;
                this.props.actions.onHome(1);
            } else if (currentAngle<-15){
                currentAngle = 0;
                this.props.actions.onHome(-1);
            }
        }, false);
    }

    render(){
        return (
            <div id="outerBox">
                <div id="outerWheel">
                    <button id="innerWheel">
                        
                    </button>
                    <button id = "left">
                        <FontAwesomeIcon icon={faBackwardFast} />
                    </button>
                    <button id = "right">
                        <FontAwesomeIcon icon={faForwardFast} />
                    </button>
                    <button id = "up">
                        MENU
                    </button>
                    <button id = "down">
                        <FontAwesomeIcon icon={faPlay} />
                    </button>

                </div>
            </div>
        )
    }

}

export default Controller;