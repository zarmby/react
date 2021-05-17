import React from 'react';
import { Link } from "react-router-dom";

class SideBar extends React.Component {

  render(){
      return (
        <div className = "SideBar">
          <div className = "element-1">
            Counter
          </div>
          <div className = "element-1">
            Task
          </div>
        </div>
      );
  }
}

export default SideBar;
