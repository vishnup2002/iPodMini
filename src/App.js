
import React from 'react';
import './App.scss';
import Controller from './Controller';
import Screen from './Screen';

class App extends React.Component{

  constructor(){
    super();
    this.state = {

      menuScreens:[
        "home",
        "music",
      ],

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

      currentIndex:{
        home: 0,
        music:0,
      },

      currentMenu: "home",

      stack:[],
    }
  }

  //operation to push the current menu into the stack
  push = (title)=>{
    this.state.stack.push(title);
  }

  //operation to pop the previous menu from the stack
  pop = ()=>{
    if (this.state.stack.length === 0){
      return null;
    }
    return this.state.stack.pop();
  }


  //handling click on center button
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

  
  //changing the highlighted menu on rotating the wheel
  changeIndex = (step)=>{
    const currentMenu = this.state.currentMenu;
    const menuScreens = this.state.menuScreens;
    if (menuScreens.includes(currentMenu)){
      
      this.setState((prevState)=>{
        const length = prevState[prevState.currentMenu].length;
        const currentIndex = prevState.currentIndex[currentMenu];
        const nextIndex = (((currentIndex+step)%length)+length)%length;
        const newIndex = JSON.parse(JSON.stringify(this.state.currentIndex));
        newIndex[currentMenu] = nextIndex;

        return {
          currentIndex: newIndex,
        }
      })
    }
  }

  //handling click on menu button ie going back to the previous screen
  handleClickMenu = () => {
    this.setState((prevState)=>{
      const ele = this.pop();
      if (ele){
        return {
          currentMenu: ele
        }
      }

      const currentIndex = JSON.parse(JSON.stringify(this.state.currentIndex));
      Object.keys(currentIndex).map(function(key,index){
        currentIndex[key] = 0;
      });
      
      
      return {
        currentIndex,
      }
      
    })
  }

  //handling click on play button to play/pause the musics
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
    let ele,index,isEmpty,items;
    const menuScreens = this.state.menuScreens; 
    if (menuScreens.includes(currentMenu)){
      isEmpty = true;
      items = this.state[currentMenu];
      index = this.state.currentIndex[currentMenu];
      ele = <Screen props = {{
        items,
        index,
        currentMenu,
        isEmpty,
      }}/>

    } 
    
    else {
      isEmpty=false;
      ele = <Screen props = {{currentMenu,isEmpty}}></Screen>
    
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
