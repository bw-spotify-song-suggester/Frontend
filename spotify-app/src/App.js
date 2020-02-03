import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom';
import Login from './components/Login/Login';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Route path="/login" exact component={Login}/>
      </header>
    </div>
  );
}

export default App;
