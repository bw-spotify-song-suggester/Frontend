import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import { Route } from "react-router-dom";
import PrivateRoute from './components/privateRoute'
import styled from 'styled-components'

function App() {
  return (
    <div className="App">
      <Navigation />
     <h1>Welcome to `Blank`</h1>
     <p>Welcome to our app that suggests songs to you based on your favorite song please sign in
       or if your a new user sign up here.
     </p>
    </div>
  );
}

export default App;
