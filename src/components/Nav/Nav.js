import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import { connect } from 'react-redux';
import { logoutUser } from '../../redux/actionCreators';

function Nav(props) {

  let [toggle, setToggle] = useState(false);

  console.log(props.user)
  return (
    <div className='navHolder'>
      <div className='navTitleHolder'>
        <img className='navLogo' alt='parachute' src='https://i7.pngguru.com/preview/463/236/951/parachuting-parachute-landing-fall-skydiver-paratrooper-parachute.jpg' />
        <h1 className='navTitle' >Our Dropzone</h1>
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
        <img onClick={() => setToggle(!toggle)} alt='burger' src={'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png'} className='mobileBurger' />
      </div>
      <div className='help'>
        {!toggle
          ? null
          : <ul className='navListMobile'>
            <Link className='navLinksMobile' to='/' >
              <p className='navListItemMobile'>Home</p>
            </Link>

            {!props.user
              ? <Link className='navLinksMobile' to={'/login/required'}><p className='navListItemMobile'>LogBook</p></Link>
              : <Link className='navLinksMobile' to={`/logbook`} >
                <p className='navListItemMobile'>LogBook</p>
              </Link>
            }

            <Link className='navLinksMobile' to={`/membership`} >
              <p className='navListItemMobile'>USPA Membership</p>
            </Link>

            {!props.user ?
              <Link className='navLinksMobile' to='/login'>
                <p className='navListItemMobile'>Sign In</p>
              </Link>
              : <button onClick={props.logoutUser} className='logoutButton'>Logout</button>
            }
          </ul>
        }
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

