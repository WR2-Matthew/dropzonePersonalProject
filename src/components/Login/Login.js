import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUsers } from '../../redux/actionCreators';
import './Login.css';

function Login(props) {

  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');

  function loginUser(email, password) {
    props.loginUsers(email, password)
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
            <label>email:</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} />
            <label>Password:</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>

          <div>
            <button onClick={() => loginUser(email, password)} >Login</button>
          </div>

          <div>
            <p>Do not have an account? <Link to='/register' >Register Here</Link></p>
          </div>
        </div>
      </div>
    </div>
  )
};

const mapDispatchToProps = {
  loginUsers
}

export default connect(null, mapDispatchToProps)(Login);
