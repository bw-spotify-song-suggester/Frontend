import React, {useState} from 'react';
import styled from 'styled-components'
import { FormLabel } from 'react-bootstrap';
import axios from 'axios';
import axiosWithAuth from '../utilities/axiosWithAuth'
// const Div = styled.div`
// text-align:center;
// color:#EF019F;
// font-family: "Abril Fatface Regular";
// `;

const Register = (props) => {
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
  
      const handleChange = e => {
        setCredentials({
          ...credentials, [e.target.name]: e.target.value
        });
        validateField(e.target.name, e.target.value);
      };

      function handleSubmit(event) {
        event.preventDefault();
        axios.post('https://guarded-everglades-25594.herokuapp.com/https://spotify-buildweek.herokuapp.com/api/auth/register', credentials)
        .then(res => console.log(res))
        console.log(credentials)
        // props.history.push('')
      }
      

  return (
    <div className="Register">
        <p>Username</p>
        <form onSubmit={handleSubmit}>
            <input
            value={credentials.username}
            onChange={handleChange}
            type="password"
            name='username'
            placeholder='Username'
            />
            {formErrors.username ? (
              <span className="input-error">Username {formErrors.username}</span>
            ) : (
              <span> </span>
            )}
             </form>
        <p>Password</p>
        <form>
            <input
            value={credentials.password}
            onChange={handleChange}
            type="password"
            name='password'
            placeholder='Password'
            />
             {formErrors.password ? (
              <span className="input-error">
                Password {formErrors.password}
              </span>
            ) : (
              <span> </span>
            )}
            <button onClick={handleSubmit}> Submit</button>
        </form>
    </div>
  );
}

export default Register;

 