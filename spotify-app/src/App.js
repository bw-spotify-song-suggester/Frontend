import React, {useState, useEffect} from 'react';
import Login from './components/Login';
import Navigation from './components/Navigation';
import { Route , Switch} from "react-router-dom";
import PrivateRoute from './components/privateRoute'
import styled from 'styled-components'
import HomePage from './components/HomePage';
import Footer from './components/footer';
import Register from './components/register';
import FavoriteList from '../src/components/Favorite/FavoriteLists'
import { axiosWithAuth } from './utilities/axiosWithAuth'
import  {UserIdContext}  from './contexts/UserIdContext'
import HomePageCard from './components/HomePageCard';


function App() {
  const id = `${localStorage.getItem('id')}`
  return (
    <div className="App">
    <Navigation />
     
  <UserIdContext.Provider value={id}>
    
  <Switch>
    <PrivateRoute exact path='/fav' component={FavoriteList}/>
    <Route path="/login" exact component={Login}/>
    <Route exact path='/register' component={Register}/>
    <PrivateRoute exact path='' component={HomePage}/>
    </Switch>
   
    </UserIdContext.Provider>
  
    <Footer/>
    </div>
  );
}

export default App;
