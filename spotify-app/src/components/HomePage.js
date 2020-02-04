import React from 'react';
import styled from 'styled-components'

const Div = styled.div`
text-align:center;
color:#EF019F;
font-family: "Abril Fatface Regular";
`;

const HomePage = () => {
  
  return (
    <Div className="HomePage">
    <h1>Welcome to `Blank`</h1>
     <p>Welcome to our app that suggests songs to you based on your favorite song please sign in
       or if your a new user sign up here.
     </p>
    </Div>
  );
}

export default HomePage;

 
 