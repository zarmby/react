import React from 'react';
import './styles.css';
import logo from '../../../assets/img/logo-1.png';
import { Link } from "react-router-dom";

class NavBar extends React.Component {


  render() {
    return (
      <div className = "NavBar">
        <div className = "logo"><img src={logo} width = "100%" height = "80px"/></div>
        <div className = "homePage">
          <Link to = "/home" className = "NavLink">Home</Link>
        </div>
        <div className = "ExcersisesPage" Link to = "/exercises">
          <Link to = "/exercises" className = "NavLink">exersices</Link>
        </div>
      </div>
    );
  }
}

export default NavBar;
