import React, { useState } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";


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
  
 
export default Registration;