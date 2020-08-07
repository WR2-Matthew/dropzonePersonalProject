import React, { Component } from 'react';
import './Register.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUsers } from '../../redux/actionCreators';
import axios from 'axios';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      fNameErr: '',
      lNameErr: '',
      emailErr: '',
      pswdErr: ''
    };
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  validate = () => {
    const { firstName, lastName, email, password } = this.state;
    let fNameErr = '';
    let lNameErr = '';
    let emailErr = '';
    let pswdErr = '';

    if (!firstName) {
      fNameErr = '* required'
    };

    if (!lastName) {
      lNameErr = '* required'
    };

    if (!email.includes('@')) {
      emailErr = '* Invalid Email'
    };

    if (password.length < 7) {
      pswdErr = '* Must be 8 or more characters'
    };

    if (emailErr || fNameErr || lNameErr || pswdErr) {
      this.setState({ emailErr, fNameErr, lNameErr, pswdErr });
      return false
    };

    if (firstName && lastName && email.includes('@') && password.length > 7) {
      this.register(firstName, lastName, email, password);
    };
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      this.setState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        fNameErr: '',
        lNameErr: '',
        emailErr: '',
        pswdErr: ''
      })
    }
  };

  register = (firstName, lastName, email, password) => {
    // console.log('hit')
    this.props.registerUsers(firstName, lastName, email, password)
    const body = { email }
    axios.post('/api/email', body)
    this.props.history.push('/')
  };

  render() {
    const { firstName, lastName, email, password, fNameErr, lNameErr, emailErr, pswdErr } = this.state;
    return (
      <div className='registerHolder'  >
        <div className='registerFormHolder'>

          <h1>Register Account</h1>

          <div className='registerForm'>

            <div className='registerLink'>
              <button className='registerButton' onClick={() => this.props.history.push('/')} >X</button>
            </div>

            <form className='formHolder' onSubmit={this.handleSubmit} id='form' >
              <div className='registerInputs' >
                <label>First Name:</label>
                <input name='firstName' value={firstName} onChange={(e) => this.handleChange(e)} />
                <div className='registerInputErr' >{fNameErr}</div>
              </div>

              <div className='registerInputs' >
                <label>Last Name:</label>
                <input name='lastName' value={lastName} onChange={(e) => this.handleChange(e)} />
                <div className='registerInputErr' >{lNameErr}</div>
              </div>

              <div className='registerInputs' >
                <label>Email:</label>
                <input name='email' value={email} onChange={(e) => this.handleChange(e)} />
                <div className='registerInputErr' >{emailErr}</div>
              </div>

              <div className='registerInputs' >
                <label>Password:</label>
                <input name='password' type='password' value={password} onChange={(e) => this.handleChange(e)} />
                <div className='registerInputErr' >{pswdErr}</div>
              </div>

              <div className='regButtonHolder'>
                <button className='regLoginButton' type='submit' form='form' value='submit' onClick={() => this.validate()} >Register</button>
              </div>

            </form>

            <div className='regLink'>
              <p><b>Already have an account?</b> <Link className='regRouter' to='/login' >Login Here!</Link></p>
            </div>

          </div>

        </div>

      </div>

    )
  }
};

const mapDispatchToProps = {
  registerUsers
}

export default connect(null, mapDispatchToProps)(Register);


















































// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux'


// function Register(props) {

//   let [firstName, setFirstName] = useState('');
//   let [lastName, setLastName] = useState('');
//   let [email, setEmail] = useState('');
//   let [password, setPassword] = useState('');

//   function register(firstName, lastName, email, password) {

//   };

//   function onSubmit(e) {
//     e.preventDefault()
//   }

//   return (
//     <div className='registerHolder' >
//       <div className='registerFormHolder' >
//         <h1>Register Account!</h1>
//         <div className='registerForm'>
//           <div className='registerLink'>
//             <button onClick={() => props.history.push('/')} >X</button>
//           </div>

//           <form className='registerInputs' noValidate onSubmit={onSubmit}
//           >
//             <label>First Name:</label>
//             <input required value={firstName} onChange={(e) => setFirstName(e.target.value)} />
//             {/* <p>* required</p> */}
//           </form>

//           <div className='registerInputs' >
//             <label>Last Name:</label>
//             <input required value={lastName} onChange={(e) => setLastName(e.target.value)} />
//             {/* <p>* required</p> */}
//           </div>

//           <div className='registerInputs' >
//             <label>Email:</label>
//             <input required value={email} onChange={(e) => setEmail(e.target.value)} />
//             {/* <p>* required</p> */}
//           </div>

//           <div className='registerInputs' >
//             <label>Password:</label>
//             <input required type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
//             {/* <p>* required</p> */}
//           </div>

          // <div>
          //   <button onClick={() => register(firstName, lastName, email, password)} >Register</button>
          // </div>

          // <div>
          //   <p>Already have an account? <Link>Login Here</Link></p>
          // </div>

//         </div>
//       </div>
//     </div >
//   )
// };

// export default Register;
