import React, { useState, useEffect,  useContext} from "react";
import axios from "axios";
import Favorite from "./Favorite";
import { axiosWithAuth } from '../../utilities/axiosWithAuth'
import  { UserIdContext } from '../../contexts/UserIdContext'

const FavoriteList = (props) => {
    const [fav, setFav] = useState([]);
    const id = useContext(UserIdContext);

    useEffect(() => {
        axiosWithAuth().get(`https://spotify-buildweek.herokuapp.com/api/user/dashboard/${id}/favorites/`)
        .then(response => {
            console.log('this is res', response)
            setFav(response.data);
          
        })
        .catch(error => {
            console.log('ehh error', error)
        })
    },[])
    console.log('this is fav',fav)
    return (
      <div>
          {
              fav.map(data => {
                  return (
                      <Favorite 
                        data ={data}
                        history={props.history}
                      />
                  )
              })
          }
      </div>  
    )
}

export default FavoriteList;