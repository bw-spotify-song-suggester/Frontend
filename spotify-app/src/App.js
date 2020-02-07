import React, {useState, useEffect} from 'react';
import Login from './components/Login';
import Navigation from './components/Navigation';
import { Router, Route , Switch} from "react-router-dom";
import PrivateRoute from './components/privateRoute'
import styled from 'styled-components'
import HomePage from './components/HomePage';
import Footer from './components/footer';
import Register from './components/register';
import FavoriteList from '../src/components/Favorite/FavoriteLists'

import { axiosWithAuth } from './utilities/axiosWithAuth'
import  {UserIdContext}  from './contexts/UserIdContext'
import HomePageCard from './components/HomePageCard';
import Profile from './components/Profile';
import history from './components/history';

function App(props) {
  const id = `${localStorage.getItem('id')}`
  return (
    <div className="App">
    
     
  <UserIdContext.Provider value={id}>
  <Switch>

    <PrivateRoute exact path='/fav'>
      <Navigation />
      <FavoriteList />
      </PrivateRoute>
    <Route path='/register' component={Register}/>
    <PrivateRoute exact path='/profile' >
      <Navigation />
      <Profile />
      </PrivateRoute>
    <PrivateRoute exact path='/homepage'>
      <Navigation history={props}/>
      <HomePage />
    </ PrivateRoute>
    <Route exact path="" component={Login}/>
    </Switch>
    </UserIdContext.Provider>
  
    <Footer/>
    </div>
  );
}

export default App;
