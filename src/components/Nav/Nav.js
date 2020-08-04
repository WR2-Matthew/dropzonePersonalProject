import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import { connect } from 'react-redux';
import { logoutUser } from '../../redux/actionCreators';

function Nav(props) {



  console.log(props.user)
  return (
    <div className='navHolder'>
      <div className='navTitleHolder'>
        <img className='navLogo' alt='parachute' src='https://i7.pngguru.com/preview/463/236/951/parachuting-parachute-landing-fall-skydiver-paratrooper-parachute.jpg' />
        <h1 className='navTitle' >DZ RATINGS</h1>
      </div>

      <div className='navRoutesHolder' >
        <ul className='navList'>
          <Link className='navLinks' to='/' >
            <p className='navListItem'>Home</p>
          </Link>
          <p>|</p>
          {!props.user
            ? <Link className='navLinks' to={'/login/required'}><p className='navListItem'>LogBook</p></Link>
            : <Link className='navLinks' to={`/logbook`} >
              <p className='navListItem'>LogBook</p>
            </Link>
          }
          <p>|</p>
          <Link className='navLinks' to={`/membership`} >
            <p className='navListItem'>USPA Membership</p>
          </Link>
          <p>|</p>
          {!props.user ?
            <Link className='navLinks' to='/login'>
              <p className='navListItem'>Sign In</p>
            </Link>
            : <button onClick={props.logoutUser} className='logoutButton'>Logout</button>
          }
        </ul>
      </div>
    </div>
  )
};

const mapDispatchToProps = {
  logoutUser
};


function mapStateToProps(state) {
  return {
    user: state.userReducer.user.data
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);

