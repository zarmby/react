import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Counter2 from './components/counter/Counter2';
import NavBar from './components/common/navbar/NavBar';
import SideBar from './components/common/slidebar/SideBar';
import Home from './components/Home/Home';
import TaskManager from './components/TaskManager/TaskManager'
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
          <Route path="/exercises/counter">
            <SideBar className = "SideBar"/>
            <Counter2 className = "excersises" max = {20}/>
          </Route>
          <Route path="/exercises/TaskManager">
            <SideBar className = "SideBar"/>
            <TaskManager className = "desc"/>
          </Route>
          <Route path="/*">
            <Home className = "desc"/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
}


export default App;
