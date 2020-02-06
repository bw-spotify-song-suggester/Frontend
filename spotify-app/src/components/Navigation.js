import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const Div = styled.div`
display:flex;
align-items:baseline;
color:#EF019F;
font-family: "Abril Fatface Regular";
border-bottom:2px solid #EF019F;
`;

const Div2 = styled.div`
display:flex;
flex-direction:row;
margin-left:70%;
justify-content: space-between;
width:15%;

`;

const H1 = styled.h2`
display:flex;
`;

const H3 = styled.h3`
flex-wrap: nowrap;
cursor: pointer;



.loginNavigation {
    text-decoration: none;
    color:#EF019F;
}
`;

const Navigation = () => {
    return (
        <Div>
            <H1>`Song Suggester`</H1>
            <Div2>
            <H3><Link exact to='/login' className='loginNavigation'>Sign in</Link></H3>
            <H3><Link exact to='/register' className='loginNavigation'>Sign Up</Link></H3>
            <H3><Link exact to='/fav' className='loginNavigation'> Favorites</Link> </H3>
            </Div2>
        </Div>
    )
}




export default Navigation