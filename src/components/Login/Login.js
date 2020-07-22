import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUsers } from '../../redux/actionCreators';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emailErr: '',
      pswdErr: '',
      email: '',
      password: ''
    };
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  validate = () => {
    const { email, password } = this.state
    let emailError = '';
    let pswdError = '';

    if (!email.includes('@')) {
      emailError = '* Invalid Email'
    };

    if (password.length < 7) {
      pswdError = '* Password includes at least 8 characters'
    };

    if (emailError || pswdError) {
      this.setState({ emailErr: emailError, pswdErr: pswdError })
      return false;
    };

    if (email.includes('@') && password.length > 7) {
      return this.loginUser(email, password)
    };
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      this.setState({
        emailErr: '',
        pswdErr: '',
        email: '',
        password: ''
      })
    }
  };

  loginUser = (email, password) => {
    this.props.loginUsers(email, password)
    this.props.history.push('/')
  }

  render() {
    const { email, password, emailErr, pswdErr } = this.state;
    return (
      <div className='loginHolder'>
        <div className='loginFormHolder' >
          <h1>Login to account!</h1>
          <div className='loginForm'>
            <div className='loginLink' >
              <button onClick={() => this.props.history.push('/')} >X</button>
            </div>

            <form onSubmit={this.handleSubmit} id='form'>
              <div className='loginInputs' >
                <label>email:</label>
                <input name='email' value={email} onChange={(e) => this.handleChange(e)} />
                <div className='loginInputErr'>{emailErr}</div>
              </div>

              <div className='loginInputs' >
                <label>Password:</label>
                <input type='password' name='password' value={password} onChange={(e) => this.handleChange(e)} />
                <div className='loginInputErr'>{pswdErr}</div>
              </div>
              <div>
                <button type='submit' form='form' value='submit' onClick={() => this.validate()} >Login</button>
              </div>
            </form>


            <div>
              <p>Do not have an account? <Link to='/register' >Register Here</Link></p>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

const mapDispatchToProps = {
  loginUsers
}

export default connect(null, mapDispatchToProps)(Login);


























// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { loginUsers } from '../../redux/actionCreators';
// import './Login.css';

// function Login(props) {

//   let [email, setEmail] = useState('');
//   let [password, setPassword] = useState('');
//   let [emailErr, setEmailErr] = useState('');
//   let [pswdErr, setPasswordErr] = useState('')

//   function validate() {
//     let emailError = '';
//     let pswdError = '';

//     if (!email.includes('@')) {
//       emailError = '* Invalid Email'
//     };

//     if (!password < 7) {
//       pswdError = '* Password includes at least 8 characters'
//     };

//     if (emailError || pswdError) {
//       setEmailErr(emailError);
//       setPasswordErr(pswdError);
//       return false;
//     };
//     return true;
//   };

//   function handleSubmit(e) {
//     e.preventDefault();
//     const isValid = validate();
//     if (isValid) {
//       setEmail('')
//       setPassword('')
//     }
//   };

//   function loginUser(email, password) {
//     props.loginUsers(email, password)
//     props.history.push('/')
//   }

//   return (
//     <div className='loginHolder'>
//       <div className='loginFormHolder' >
//         <h1>Login to account!</h1>
//         <div className='loginForm'>
//           <div className='loginLink' >
//             <button onClick={() => props.history.push('/')} >X</button>
//           </div>

//           <form onSubmit={handleSubmit} id='form'>
//             <div className='loginInputs' >
//               <label>email:</label>
//               <input value={email} onChange={(e) => setEmail(e.target.value)} />
//               <div>{emailErr}</div>
//             </div>

//             <div className='loginInputs' >
//               <label>Password:</label>
//               <input value={password} onChange={(e) => setPassword(e.target.value)} />
//               <div>{pswdErr}</div>
//             </div>
//             <div>
//               <button type='submit' form='form' value='submit' onClick={loginUser(email, password)} >Login</button>
//             </div>
//           </form>


//           <div>
//             <p>Do not have an account? <Link to='/register' >Register Here</Link></p>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// };

// const mapDispatchToProps = {
//   loginUsers
// }

// export default connect(null, mapDispatchToProps)(Login);