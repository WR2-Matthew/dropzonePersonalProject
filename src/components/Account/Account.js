import React, { useState, useEffect } from 'react';
import './Account.css';
import { connect } from 'react-redux';
import EditAccountModal from '../EditAccountModal/EditAccountModal';

function Account(props) {

  let [uspa, setUspa] = useState(false);

  return (
    <div className='accountHolder' >
      <div className='accountForm' >
        <div className='accountFormHeader' >
          <h2 className='accountInfo' >Account Details</h2>
        </div>

        <div className='profilePictureHolder'>
          {/* <img className='accountProfilePicture' alt='Sick Skydiving Photo' src={'https://www.kindpng.com/picc/m/21-214439_free-high-quality-person-icon-default-profile-picture.png'} /> */}
          <img className='accountProfilePicture' alt='Sick Skydiving Photo' src={props.user.profilePicture} />
        </div>

        <div className='accountDetails'>
          {!props.user
            ? null
            : <div className='accountDetailsHolder'>
              <div className='accountDetails' >
                <label><b>Name:</b></label>
                <p>{props.user.firstName} {props.user.lastName}</p>
              </div>

              <div className='accountDetails' >
                <label><b>Email:</b></label>
                <p>{props.user.email}</p>
              </div>

              <div className='accountButtons'>
                <EditAccountModal
                  fName={props.user.firstName}
                  lName={props.user.lastName}
                  email={props.user.email}
                  profilePicture={props.user.profilePicture}
                  id={props.user.id}
                  awards={props.user.awards}
                  expirationDate={props.user.expirationDate}
                  licenseNumber={props.user.licenseNumber}
                  memberSince={props.user.memberSince}
                  recExp={props.user.recExp}
                  recognitions={props.user.recognitions}
                />
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  )
};

function mapStateToProps(state) {
  return {
    user: state.userReducer.user.data
  }
}

export default connect(mapStateToProps)(Account);