import React from 'react';
import Login from './components/Login';
import Navigation from './components/Navigation';
import { Route , Switch} from "react-router-dom";
import PrivateRoute from './components/privateRoute'
import styled from 'styled-components'
import HomePage from './components/HomePage';
import Footer from './components/footer';
import Register from './components/register';
import FavoriteList from '../src/components/Favorite/FavoriteLists'



function App() {
  return (
    <div className="App">
      <Navigation />
  <Switch>
    <PrivateRoute exact path='/fav' component={FavoriteList}/>
    <Route path="/login" exact component={Login}/>
    <Route exact path='/register' component={Register}/>
    <PrivateRoute exact path='' component={HomePage}/>
  </Switch>
    <Footer/>
    </div>
  );
}

export default App;
