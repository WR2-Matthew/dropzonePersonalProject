import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import { connect } from 'react-redux';
import { getUser, logoutUser } from '../../redux/actionCreators';

function Nav(props) {

  useEffect(() => {
    console.log(props.user)
  }, [props.user]);


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
          <Link className='navLinks' to={`/logbook`} >
            <p className='navListItem'>LogBook</p>
          </Link>
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
  getUser,
  logoutUser
}


function mapStateToProps(state) {
  return {
    user: state.userReducer.user.data
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);

