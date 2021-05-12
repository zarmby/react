import React from 'react';
import './styles.css';
import logo from './logo-1.png';

class NavBar extends React.Component {

  ChangePage(page){
          const { handlePage } = this.props;
          handlePage(page);
    }

  render() {
    return (
      <div class = "NavBar">
        <div class = "root-1"><img src={logo} width = "100%" height = "80px"/></div>
        <div class = "root-2" onClick={() => this.ChangePage(1)}>Home</div>
        <div class = "root-3" onClick={() => this.ChangePage(2)}>Excercises</div>
      </div>
    );
  }
}

export default NavBar;
