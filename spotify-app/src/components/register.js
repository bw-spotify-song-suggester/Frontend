import React, {useState} from 'react';
import styled from 'styled-components'
import axios from 'axios';
import axiosWithAuth from '../utilities/axiosWithAuth'
import { FormGroup, FormControl, FormLabel } from "react-bootstrap";
import { withStyles, makeStyles, } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


import Background from '../Images/background2.png'
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
    color: 'white',
    lineHeight: 1.5,
    backgroundColor: '#171330',
    borderColor: 'white',
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
      color:'white',
      backgroundColor: '#EF019F',
      borderColor: '#white',
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
  input: {
    color:'red',
  }
}));


const Register = (props) => {
  const classes = useStyles();
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const [formErrors, setFormErrors] = useState({
    username: "",
    password: "",
  });

  const [usernameValid, setUsernameValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  

  const validateField = (name, value) => {
    let fieldValidationErrors = formErrors;
    let formUsernameValid = usernameValid;
    let formPasswordValid = passwordValid;

    switch (name) {
      case "username":
        formUsernameValid = value.length >= 4;
        fieldValidationErrors.username = formUsernameValid
          ? ""
          : " is too short";
        break;
      case "password":
        formPasswordValid = value.length >= 6;
        fieldValidationErrors.password = formPasswordValid
          ? ""
          : " is too short";
        break;
      default:
        break;
    }
    setFormErrors(fieldValidationErrors);
    setUsernameValid(formUsernameValid);
    setPasswordValid(formPasswordValid);
  };

 
  function validateForm() {
    console.log('this is values',credentials)
      let errors = {};
      if(credentials.username.trim() === "") {
          errors.username = "Username must not be empty"
      }
      if(credentials.password.trim() === "") {
          errors.password = "Password must not be empty"
      }
      return errors;
  }



  function handleSubmit(event) {
    event.preventDefault();
    axios.post('https://spotify-buildweek.herokuapp.com/api/auth/register', credentials)
    .then(res => {
      props.history.push('/login')
      console.log('this is register res',res)
    })
  }

  const handleChange = e => {
    setCredentials({
      ...credentials, [e.target.name]: e.target.value
    });
    validateField(e.target.name, e.target.value);
  };
 
  return (
    <Div2 className="Login">
      <Div>
      <h1>Welcome</h1>
      <h3>Hello, Please Register here.</h3>
      </Div>
      <Form onSubmit={handleSubmit}>
        <FormGroup controlId="Username" bsSize="large">
          <TextField className={classes.root} id="standard-basic" label="Username"  
            type="username"
            value={credentials.username}
            onChange={handleChange}
            name='username'
            />
            {formErrors.username ? (
            <span className="input-error">Username {formErrors.username}</span>
          ) : (
            <span> </span>
          )}
        </FormGroup>
        <FormGroup  controlId="password" bsSize="large">
          <TextField className={classes.root} id="standard-basic" label="Password"  
            value={credentials.password}
            onChange={handleChange}
            type="password"
            name='password'
            />
            {formErrors.password ? (
            <span className="input-error">
              Password {formErrors.password}
            </span>
          ) : (
            <span> </span>
          )}
        </FormGroup>
        <BootstrapButton onClick={handleSubmit} disabled={!validateForm()} className='button' variant="contained" color="primary" disableRipple>
          Register
        </BootstrapButton>
      </Form>
    </Div2>
  );
}


export default Register;

 