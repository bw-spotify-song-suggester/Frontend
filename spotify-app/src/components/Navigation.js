import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import history from './history';

const Div = styled.div`
display:flex;
align-items:baseline;
color:#EF019F;
font-family: "Abril Fatface Regular";
border-bottom:2px solid #EF019F;
background-color:#171330;
`;

const Div2 = styled.div`
display:flex;
flex-direction:row;
margin-left:50%;
justify-content: space-between;
width:35%;
`;

const H1 = styled.h2`
display:flex;
margin-left:1%;
`;

const H3 = styled.h3`
flex-wrap: nowrap;
cursor: pointer;



.loginNavigation {
    text-decoration: none;
    color:#EF019F;
}
`;


const Navigation = (props) => {
    const Logout =()=> {
        {localStorage.removeItem('id')}
        {localStorage.removeItem('token')}
        history.go('')
        }
        console.log('this is props in navigation', history)
    return (
        <Div>
            <H1> Song Suggester </H1>
            <Div2>
            
            <H3><Link exact to='/homepage' className='loginNavigation'> Search </Link> </H3>
            <H3><Link exact to='/fav' className='loginNavigation'> Favorites</Link> </H3>
            <H3><Link exact to='/profile' className='loginNavigation'> Profile</Link> </H3>
            <H3><a href='https://symthinity-spotify-song-suggester-1.netlify.com/' className='loginNavigation'> Marketing Page </a></H3>
            <H3 onClick={Logout}> Log Out </H3>
            </Div2>
        </Div>
    )
}




export default Navigation