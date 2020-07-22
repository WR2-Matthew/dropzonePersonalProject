import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {

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
          <Link className='navLinks' to='/login'>
            <p className='navListItem'>Sign In</p>
          </Link>
        </ul>
      </div>
    </div>
  )
};

export default Nav;

