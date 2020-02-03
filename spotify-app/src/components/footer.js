import React from 'react'
import styled from 'styled-components'

const P = styled.p`
text-align: center;
margin-top:5%;
color:#EF019F;
`;
const Footer = () => {
    return (
        <P className='footer'>Copyright © 2020 `Song Suggestor`</P>
    )
}

export default Footer;