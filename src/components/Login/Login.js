import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Login.css';

function Login(props) {

  let [username, setUsername] = useState('');
  let [password, setPassword] = useState('');

  login = () => {

  }

  return (
    <div className='loginHolder'>
      <div className='loginFormHolder' >
        <h1>Login to account!</h1>
        <div className='loginForm'>
          <div className='loginLink' >
            <button onClick={() => props.history.push('/')} >X</button>
          </div>

          <div className='loginInputs' >
            <label>Username:</label>
            <input value={username} onChange={(e) => setUsername(e.target.value)} />
            <label>Password:</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>

          <div>
            <button onClick={() => login()} >Login</button>
          </div>

          <div >
            <p></p>
          </div>
        </div>
      </div>
    </div>
  )
};

export default connect(null,)(Login);
