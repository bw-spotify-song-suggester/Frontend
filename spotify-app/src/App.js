import React from 'react';
import './App.css';
import Login from './components/Login/Login';
import Navigation from './components/Navigation';
import { Route } from "react-router-dom";
import PrivateRoute from './components/privateRoute'
import styled from 'styled-components'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    <Route path="/login" exact component={Login}/>
      <Navigation />
     <h1>Welcome to `Blank`</h1>
     <p>Welcome to our app that suggests songs to you based on your favorite song please sign in
       or if your a new user sign up here.
     </p>
    </div>
  );
}

export default App;
