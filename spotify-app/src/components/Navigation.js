import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
display:flex;
align-items:baseline;
border:2px solid red;
color:#EF019F;
font-family: "Abril Fatface Regular";
`;

const H1 = styled.h1`
margin:2%;
`;
const H2 = styled.h3`
display:flex;
margin-left:60%;
cursor: pointer;
`;
const H3 = styled.h3`
flex-wrap: nowrap;
margin:3%;
cursor: pointer;
`;

const Navigation = () => {
    return (
        <Div>
            <H1>`Song Suggester`</H1>
            <H2>Sign in</H2>
            <H3>Sign Up</H3>
        </Div>
    )
}




export default Navigation