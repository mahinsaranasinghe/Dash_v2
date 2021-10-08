import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import NavBar from './components/navigationbar';
import HomePage from './pages/Homepage';
import HumidityPage from './pages/Humidity';
import TemperaturePage from './pages/Temperature';

function App() {
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route path="/" exact component={HomePage}/>
        <Route path="/Temperature" exact component={TemperaturePage}/>
        <Route path="/Humidity" exact component={HumidityPage}/>
      </Switch>
    </Router>
  );
}

export default App;
