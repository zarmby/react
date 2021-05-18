import React from 'react';
import './styles.css';
import logo from '../../../assets/img/logo-1.png';
import { Link } from "react-router-dom";

class NavBar extends React.Component {


  render() {
    return (
      <div className = "NavBar">
        <div className = "logo"><img src={logo} width = "100%" height = "80px"/></div>
        <Link to = "/home" className = "homePage">
          Home
        </Link>
        <Link to = "/exercises/counter" className = "ExcersisesPage">
          exersices
        </Link>
      </div>
    );
  }
}

export default NavBar;
