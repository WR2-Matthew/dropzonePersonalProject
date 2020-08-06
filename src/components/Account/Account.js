import React, { useState } from 'react';
import './Account.css';
import { connect } from 'react-redux';
import EditAccountModal from '../EditAccountModal/EditAccountModal';

function Account(props) {

  let [uspa, setUspa] = useState(false);

  return (
    <div className='accountHolder' >
      <div className='accountForm' >
        <div className='accountFormHeader' >
          <h2>Account Details</h2>
        </div>

        <div className='profilePictureHolder'>
          {!props.user.profilePicture
            ? <img className='accountProfilePicture' alt='Sick Skydiving Photo' src={'https://lh3.googleusercontent.com/proxy/qVMkjsmO5w_Sae-fKAvzdToDTeUH_2M76qGhRBcRHoI_AauGvt0fkAyu-Ar8POsfSzBOaAFmxRbIAgdGmBiXrxG7zAsNTGWQW18WiFv3VmQJiSloGuhYBZnQk5_grzguZ4se6yjJXHCz2VChcrxktKJIB-oZOPQHxk-i7QOjff46NVUdUMTY9A'} />
            : <img className='accountProfilePicture' alt='Sick Skydiving Photo' src={props.user.profilePicture} />
          }
        </div>

        <div className='accountDetails'>
          {!props.user
            ? null
            : <div className='accountDetailsHolder'>
              <div className='accountDeatils' >
                <label><b>Name:</b></label>
                <p>{props.user.firstName} {props.user.lastName}</p>
              </div>

              <div className='accountDeatils' >
                <label><b>Email:</b></label>
                <p>{props.user.email}</p>
              </div>

              <div className='accountButtons'>
                <EditAccountModal
                  fName={props.user.firstName}
                  lName={props.user.lastName}
                  email={props.user.email}
                  profilePicture={props.user.profilePicture}
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