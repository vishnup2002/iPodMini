
import React from 'react';
import './App.css';
import Controller from './Controller';
import Screen from './Screen';

class App extends React.Component{

  constructor(){
    super();
    this.state = {
      home:[
        "cover flow",
        "music",
        "games",
        "settings",
      ],

      music:[
        "all songs",
        "artists",
        "albums",
      ],

      selectedMusicIndex: 0,
      selectedHomeIndex: 0,
      currentMenu: "home"
    }
  }


  changeActiveMusicIndex = (step)=>{
    this.setState((prevState)=>{
      return {
        selectedMusicIndex: (((prevState.selectedMusicIndex+step)%this.state.music.length)+this.state.music.length)%this.state.music.length,
      }
    }
    
    )
  }

  changeActiveHomeIndex = (step)=>{
    this.setState((prevState)=>{
      return {
        selectedHomeIndex: (((prevState.selectedHomeIndex+step)%this.state.home.length)+this.state.home.length)%this.state.home.length,
      }

    })
  }

  render(){

    const items = this.state[this.state.currentMenu];
    var index;

    const currentMenu = this.state.currentMenu;

    if (currentMenu === "home"){
      index = this.state.selectedHomeIndex;
    } else {
      index = this.state.selectedMusicIndex;
    }

    return (
      <div className='App'>

        <Screen props = {{
          items,
          index,
          currentMenu,
        }}/>

        <Controller actions = {{
          onHome:this.changeActiveHomeIndex,
          onMusic:this.changeActiveMusicIndex,
        }} index = {index}
        
        />

      </div>
    )
  }
}

export default App;
