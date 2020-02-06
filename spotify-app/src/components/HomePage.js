import React, { useEffect, useState }from 'react';
import styled from 'styled-components';
import { axiosWithAuth } from '../utilities/axiosWithAuth';

const Div = styled.div`
text-align:center;
color:#EF019F;
font-family: "Abril Fatface Regular";
`;


const id = `${localStorage.getItem('id')}`


const HomePage = () => {
  const id = `${localStorage.getItem(`id`)}`
  const[songlist, setSonglist] = useState();
  
  useEffect(() => {
    axiosWithAuth().get(`https://spotify-buildweek.herokuapp.com/api/user/dashboard/${id}/songs`)
    .then(res => {
      //console.log(res.data[3].track_name)
      setSonglist(res.data);
      console.log(songlist);
  })
    .catch(err => console.log(err))
  },[])

  return (
    <Div className="HomePage">
    <h1>Welcome to `Blank`</h1>
     <p>Welcome to our app that suggests songs to you based on your favorite song please sign in
       or if your a new user sign up here.
     </p>
     {console.log(songlist)}
    </Div>
  );
}

export default HomePage;

 
 