import React from 'react';
import Login from './components/Login';
import Navigation from './components/Navigation';
import { Route , Switch} from "react-router-dom";
import PrivateRoute from './components/privateRoute'
import styled from 'styled-components'
import HomePage from './components/HomePage';


function App() {
  return (
    <div className="App">
      <Navigation />
   <Switch>
    <Route path="/login" exact component={Login}/>
    <Route exact path='' component={HomePage}/>
    </Switch>
    </div>
  );
}

export default App;
