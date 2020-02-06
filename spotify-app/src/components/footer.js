import React from 'react'
import styled from 'styled-components'

const P = styled.body`
.content {
    min-height: calc(100vh - 70px);
  }
  .footer {
    height: 50px;
    text-align:center;
  }
`;
const Footer = () => {
    return (
        <P>
  <div class="content">
    content
  </div>
  <footer class="footer"> Copyright © 2020 Song Suggestor</footer>
</P>
    )
}

export default Footer;