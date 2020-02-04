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

const H1 = styled.h1`
margin:2%;
`;
const H2 = styled.h3`
display:flex;
margin-left:60%;
cursor: pointer;
text-decoration: none;

.loginNavigation {
    text-decoration: none;
    color:#EF019F;
}
`;

const H3 = styled.h3`
flex-wrap: nowrap;
margin:3%;
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
            <H2><Link exact to='/login' className='loginNavigation'>Sign in</Link></H2>
            <H3><Link exact to='/register' className='loginNavigation'>Sign Up</Link></H3>
        </Div>
    )
}




export default Navigation