import React, { useState, useEffect } from "react";
import axios from "axios";
import Favorite from "./Favorite";

const FavoriteList = () => {
    const [fav, setFav] = useState([]);

    useEffect(() => {
        axios.get('https://spotify-buildweek.herokuapp.com/api/user/dashboard/1/favorites/')
        .then(response => {
            setFav(response.data);
            console.log(fav)
        })
        .catch(error => {
            console.log('ehh error', error)
        })
    })
    
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