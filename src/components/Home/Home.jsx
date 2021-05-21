import React from "react";
import Profile from '../../assets/img/profile.jpg'
import './styles.css';

class Home extends React.Component {

  render(){
    return(
      <div className = "desc">
        <div className = "picture">
          <img src={Profile} width = "200px" height = "200xpx"/>
        </div>
        <div className = "Description">
          <h2>My name is Armando and i love the ice skating play videogames and learn new ways to do best things
          in the area of technologies i have 22 years but i appear of 16 idk why -.- if you whant now more about me send a
          message to +55 555 555 555 the phone its true trust me :3</h2>
        </div>
        <div className = "name">
          <h1>Armando Hernnadez Rivera</h1>
        </div>
      </div>
    );
  }
}

export default Home;
