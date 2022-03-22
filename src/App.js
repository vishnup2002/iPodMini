
import React from 'react';
import './App.scss';
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
      currentMenu: "home",

      stack:[],
    }
  }

  push = (title)=>{
    this.state.stack.push(title);
  }

  pop = ()=>{
    if (this.state.stack.length === 0){
      return null;
    }
    return this.state.stack.pop();
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

  handleClickHome = (index) => {
    
    this.setState((prevState)=>{
      this.state.stack.push(prevState.currentMenu);
      return (
        {
          currentMenu: prevState[prevState.currentMenu][index],
        }
      )
    })
  }

  

  changeIndex = (step) => {
    if (this.state.currentMenu === "home"){
      this.changeActiveHomeIndex(step);
    } else {
      this.changeActiveMusicIndex(step);
    }
  }

  handleClickMenu = () => {
    this.setState((prevState)=>{
      const ele = this.pop();
      if (ele){
        return {
          currentMenu: ele
        }
      }
      return {
          selectedHomeIndex:0
        }
      
    })
  }

  handleClickPlay = ()=>{
    const player = document.getElementById("music-player");
    if (player.paused){
      player.play();
    } else {
      player.pause();
    }
  }

  render(){

    const currentMenu = this.state.currentMenu;
    let ele,index,isEmpty;
    if (["settings","games","cover flow","all songs","artists","albums"].includes(currentMenu)){
      isEmpty=false;
      ele = <Screen props = {{currentMenu,isEmpty}}></Screen>
    } else {
      isEmpty = true;
      const items = this.state[currentMenu];
      
      if (currentMenu === "home"){
        index = this.state.selectedHomeIndex;
      } else {
        index = this.state.selectedMusicIndex;
      }
      ele = <Screen props = {{
        items,
        index,
        currentMenu,
        isEmpty,
      }}/>
    
    }

    

    return (
      <div className='ipod'>

        {ele}

        <Controller actions = {{
          onScroll:this.changeIndex,
          onHomeClick:this.handleClickHome,
          onMenuClick: this.handleClickMenu,
          onPlayClick: this.handleClickPlay,
          
        }} 
        index = {index}
        isEmpty = {isEmpty}
        currentMenu = {currentMenu}
        
        />

      </div>
    )
  }
}

export default App;
