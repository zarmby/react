import React from 'react'
import Counter2 from './components/counter/Counter2'
import NavBar from './components/Home/NavBar'
import SideBar from './components/Home/SideBar'
import Home from './components/Home/Home'


import './App.css';

class App extends React.Component {

  state = {
    page: 2
  }

  handlePage = (pageRecived) => {
    this.setState({
      page: pageRecived
    });
  }

render(){
  return (
    <div className="App">
      <header className="App-header">
        <NavBar handlePage={this.handlePage}/>
      </header>
      <div class = "content">
        <div>
          <SideBar className = "SideBar"></SideBar>
        </div>
        <div className = "excersises">
        {this.state.page===1
        ? <Home/>
        : <Counter2 max = {20}></Counter2 > }
        </div>
      </div>
    </div>
  );
}
}


export default App;
