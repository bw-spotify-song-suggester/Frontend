import React, { useState, useEffect } from "react";
import axios from "axios";
import Favorite from "./Favorite";
import { axiosWithAuth } from '../../utilities/axiosWithAuth'

const FavoriteList = (props) => {
    const [fav, setFav] = useState([]);
    const id = `${localStorage.getItem('id')}`
    console.log(id)

    useEffect(() => {
        axiosWithAuth().get(`https://spotify-buildweek.herokuapp.com/api/user/dashboard/1/favorites/`)
        .then(response => {
            setFav(response.data);
            console.log('this is fav',fav)
        })
        .catch(error => {
            console.log('ehh error', error)
        })
    },[])
    
    return (
      <div>
          {
              fav.map(data => {
                  return (
                      <Favorite 
                        key= {data.id}
                        data ={data}
                      />
                  )
              })
          }
      </div>  
    )
}

export default FavoriteList;