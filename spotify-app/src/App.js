import React from 'react';
import Login from './components/Login';
import Navigation from './components/Navigation';
import { Route , Switch} from "react-router-dom";
import PrivateRoute from './components/privateRoute'
import {BrowserRouter as Router} from 'react-router-dom';

import HomePage from './components/HomePage';
import Footer from './components/footer';
import Register from './components/register';
import FavoriteList from '../src/components/Favorite/FavoriteLists'


import  {UserIdContext}  from './contexts/UserIdContext'

import Profile from './components/Profile';
import history from './components/history'
import HomePageCard from './components/HomePageCard';

function App() {
  const id = `${localStorage.getItem('id')}`
  return (
    <div className="App">
    
     
  <UserIdContext.Provider value={id}>
    <Router>
  <Switch>
    <PrivateRoute exact path='/fav'>
      <Navigation />
      <FavoriteList history={history}/>
    </PrivateRoute>
    <Route path='/register' component={Register}/>
    <PrivateRoute exact path='/profile' >
      <Navigation />
      <Profile />
    </PrivateRoute>
    <PrivateRoute exact path='/homepage'component={HomePage}/>
    <Route exact path="" component={Login}/>
    </Switch>
    </Router>
    </UserIdContext.Provider>
    <Footer/>
    </div>
  );
}

export default App;
