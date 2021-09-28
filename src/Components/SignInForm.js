import React, { useState } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import Navbar from './Navbar';

const SignInForm = () => {
  const { oktaAuth } = useOktaAuth();
  const [sessionToken, setSessionToken] = useState();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    oktaAuth.signInWithCredentials({ username, password })
    .then(res => {
      const sessionToken = res.sessionToken;
      setSessionToken(sessionToken);
      console.log("sessiontoken", sessionToken)
    console.log("res", res.data)
      oktaAuth.signInWithRedirect({ sessionToken });
    })
    .catch(err => console.log('Found an error', err));
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  if (sessionToken) {
    // Hide form while sessionToken is converted into id/access tokens
    return null;
  }

  return (
<div>
<Navbar/>
<form onSubmit={handleSubmit} className = " w-50 m-auto">
  <div className="form-group">
    <label for="exampleInputEmail1 ">Email address</label>
    <input  id="username" type="text"
          value={username}
          onChange={handleUsernameChange} class="form-control"  aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input id="password" type="password"
          value={password}
          onChange={handlePasswordChange} class="form-control" placeholder="Password"/>
  </div>
  
  <button  id="submit" value="Submit"  type="submit" class="btn btn-primary">Submit</button>
</form>
</div>


    
  );
};
export default SignInForm;