import {getStorage, ref, getDownloadURL} from "firebase/storage";
import React from "react";

//function to fetch the url of the audio
const getURL = async ()=>{
    const storage = getStorage();
    const url = await getDownloadURL(ref(storage,'audio/Abhi Mujh Mein Kahin.mp3'))
    return url;
}

class AppScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            url:"", //url of song
        }
        
    }

    async componentDidMount(){
        //fetching url of song and setting state
        const url = await getURL();
        this.setState({
            url
        });
        

    }

    

    render(){
        let ele;
        //when the screen is on all songs show the music player
        if (this.props.title === "all songs"){

            ele = <div id="music-player-container" style={{width:"100%"}}>
                <audio controls src={this.state.url} id="music-player" style={{width:"100%"}}></audio>
                </div>
        }

        return (
            <div id="app-screen">
                <div id="title">
                    <h1>{this.props.title}</h1>
                </div>

                {(this.props.title==="all songs" && ((this.state.url!=="" && ele)||<span>Loading...</span>))}

                

            </div>
        )
    }
}


export default AppScreen;