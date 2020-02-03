import React, { useState } from "react";
import { FormGroup, FormControl, FormLabel } from "react-bootstrap";
import { withStyles, makeStyles, } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import "./Login.css";
import styled from 'styled-components'
import Background from '../Images/background.PNG'
import Button from '@material-ui/core/Button';

const Div = styled.div`
text-align:center
`;
const Div2 = styled.div`
border:2px solid white;
width:50%;
margin:5% auto;
background-image: url(${Background});
.button {
  margin-top:20%;
  width:100px;
}
`;
const Form = styled.form`
display:flex;
flex-direction:column;
align-items:center;
width:100px;
`;
const BootstrapButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    color: '#171330',
    lineHeight: 1.5,
    backgroundColor: '#EF019F',
    borderColor: '#171330',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: 'pink',
      borderColor: '#171330',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
})(Button);

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      color:'white',
      width:'200px',
    },
  },
}));

  const Login = (props) => {
    const classes = useStyles();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    function validateForm() {
      return email.length > 0 && password.length > 0;
    }
  
    function handleSubmit(event) {
      event.preventDefault();
    }
  
    return (
      <Div2 className="Login">
        <Div>
        <h1>Welcome</h1>
        <h3>Hello, Welcome back pleage log in.</h3>
        </Div>
        <Form onSubmit={handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <TextField className={classes.root} id="standard-basic" label="Email"  
              autoFocus
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}/>
          </FormGroup>
          <FormGroup  controlId="password" bsSize="large">
            <TextField className={classes.root} id="standard-basic" label="Password"  
              value={password}
              onChange={e => setPassword(e.target.value)}
              type="password"/>
          </FormGroup>
          <BootstrapButton className='button' variant="contained" color="primary" disableRipple>
        Log In
      </BootstrapButton>
        </Form>
      </Div2>
    );
  }
  
 
export default Login;