import React from 'react';
import { Link } from "react-router-dom";
import "./styles.css"

class SideBar extends React.Component {

  render(){
      return (
        <div className = "SideBar">
          <Link to = "/exercises/counter" className = "element-1">Counter</Link>
          <Link to = "/exercises/counter" className = "element-2">Task Manager</Link>
          <Link to = "/exercises/counter" className = "element-3">Pokedex</Link>
        </div>
      );
  }
}

export default SideBar;
