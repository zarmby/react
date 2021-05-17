import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Counter2 from './components/counter/Counter2';
import NavBar from './components/common/navbar/NavBar';
import SideBar from './components/common/slidebar/SideBar';
import Home from './components/Home/Home';
import './App.css';

class App extends React.Component {

render(){
  return (
    <Router>
      <NavBar/>
      
      <div className = "content">
        <Switch>
          <Route path="/home">
            <Home className = "desc"/>
          </Route>
          <Route path="/exercises">
            <SideBar className = "SideBar"/>
            <Counter2 className = "excersises" max = {20}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
}


export default App;
