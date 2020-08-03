import React from 'react';
import './LoginRequired.css'

function LoginRequired(props) {

  return (
    <div className='loginReqHolder'>
      <h1 className='loginReqTitle'>Must be logged in to view logbook!</h1>
    </div>
  )
};

export default LoginRequired;