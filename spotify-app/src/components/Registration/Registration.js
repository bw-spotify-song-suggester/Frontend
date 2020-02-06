import React, { useState } from "react";
import { FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "./Registration.css";
import { withStyles, makeStyles, } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import Background from '../../Images/background.PNG';
import Button from '@material-ui/core/Button';
import axios from 'axios';

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



  // const Registration = (props) => {

  //   const [email, setEmail] = useState("");
  //   const [username, setUsername] = userState("");
  //   const [password, setPassword] = useState("");
  
  //   function validateForm(values) {
  //       let errors = {};
  //       if(values.username.trim() === "") {
  //           errors.username = "Username must not be empty"
  //       }
  //       if(values.email.trim() === "") {
  //           errors.email = "Email must not be empty"
  //       }
  //       if(values.password.trim() === "") {
  //           errors.password = "Password must not be empty"
  //       }
  //       return errors;
  //   }
  
  //   function handleSubmit(event) {
  //     event.preventDefault();
  //   }
  
  //   return (
  //     <div className="Register">
  //       <form onSubmit={handleSubmit}>
  //         <FormGroup controlId="username" bsSize="large">
  //           <FormLabel>Username</FormLabel>
  //           <FormControl
  //             autoFocus
  //             type="text"
  //             value={username}
  //             onChange={e => setUsername(e.target.value)}
  //           />
  //         </FormGroup>
  //         <FormGroup controlId="email" bsSize="large">
  //           <FormLabel>Email</FormLabel>
  //           <FormControl
  //             autoFocus
  //             type="email"
  //             value={email}
  //             onChange={e => setEmail(e.target.value)}
  //           />
  //         </FormGroup>
  //         <FormGroup controlId="password" bsSize="large">
  //           <FormLabel>Password</FormLabel>
  //           <FormControl
  //             value={password}
  //             onChange={e => setPassword(e.target.value)}
  //             type="password"
  //           />
  //         </FormGroup>
  //         <Button block bsSize="large" disabled={!validateForm()} type="submit">
  //           Login
  //         </Button>
  //       </form>
  //     </div>
  //   );
  // }

  const Registration = (props) => {
    const classes = useStyles();
    // const [email, setEmail] = useState("");
    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");
  
    // function validateForm(values) {
    //     let errors = {};
    //     if(values.username.trim() === "") {
    //         errors.username = "Username must not be empty"
    //     }
    //     if(values.email.trim() === "") {
    //         errors.email = "Email must not be empty"
    //     }
    //     if(values.password.trim() === "") {
    //         errors.password = "Password must not be empty"
    //     }
    //     return errors;
    // }

    const [credentials, setCredentials] = useState({
      username: '',
      email: '',
      password: '',
    });
    const [formErrors, setFormErrors] = useState({
      username: "",
      email: "",
      password: "",
    });

    const [usernameValid, setUsernameValid] = useState(false);
    const [emailValid, setEmailValid] = useState(false);
    const [passwordValid, setPasswordValid] = useState(false);
    
  
    const validateField = (name, value) => {
      let fieldValidationErrors = formErrors;
      let formUsernameValid = usernameValid;
      let formEmailValid = emailValid;
      let formPasswordValid = passwordValid;
  
      switch (name) {
        case "username":
          formUsernameValid = value.length >= 4;
          fieldValidationErrors.username = formUsernameValid
            ? ""
            : " is too short";
          break;
        case "email":
          formEmailValid = value.length >= 1;
          fieldValidationErrors.email= formEmailValid
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
      setEmailValid(formEmailValid);
      setPasswordValid(formPasswordValid);
    };

    const handleChange = e => {
      setCredentials({
        ...credentials, [e.target.name]: e.target.value
      });
      validateField(e.target.name, e.target.value);
    };

  
    function handleSubmit(event) {
      event.preventDefault();
      axios.post('https://spotify-buildweek.herokuapp.com/api/auth/register', credentials)
      .then(res => console.log(res))
      console.log(credentials)
    }
  
    return (
      <Div2 className="Register">
        <Div>
        <h1>Welcome</h1>
        <h3>Hello, Please sign up.</h3>
        </Div>
        <Form onSubmit={handleSubmit}>
          <FormGroup controlId="Username" bsSize="large">
            <TextField className={classes.root} id="standard-basic" label="Username"
                type="username"
                name='username'
                value={credentials.username}
                onChange={handleChange}
            />
            {formErrors.username ? (
                  <span className="input-error">Username {formErrors.username}</span>
                ) : (
                  <span> </span>
            )}
          </FormGroup>
          <FormGroup controlId="email" bsSize="large">
            <TextField className={classes.root} id="standard-basic" label="Email"
                type="email"
                name='email'
                value={credentials.email}
                onChange={handleChange}
            />
            {formErrors.email ? (
                  <span className="input-error">Email {formErrors.email}</span>
                ) : (
                  <span> </span>
            )}
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <TextField className={classes.root} id="standard-basic" label="Password"
                type="password"
                name='password'
                value={credentials.password}
                onChange={handleChange}
                type="password"
            />
            {formErrors.password ? (
                  <span className="input-error">Password {formErrors.password}</span>
                ) : (
                  <span> </span>
            )}
          </FormGroup>
          <BootstrapButton onClick={handleSubmit} className='button' variant="contained" color="primary" disableRipple>
            Sign Up
          </BootstrapButton>
        </Form>
      </Div2>
    );
  }

  
 
export default Registration;