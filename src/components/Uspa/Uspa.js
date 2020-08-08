import React, { useEffect } from 'react';
import './Uspa.css';
import { connect } from 'react-redux';
import { getUser } from '../../redux/actionCreators';

function Uspa(props) {

  useEffect(() => {
    props.getUser()
  }, []);

  return (
    <div className='uspaHolder'>
      <div className='uspaCardHolder'>
        {!props.user
          ? null
          : <div className='uspacard' >
            <div className='leftSide'>
              <h3 className='props'>{props.user.licenseNumber}</h3>
              <h3 className='props'>{props.user.expirationDate}</h3>
              <div className='awardsHolder'>
                <h3 className='propsAward'>{props.user.awards}</h3>
              </div>
            </div>

            <div className='rightSide'>
              <h3 className='rightProps'>{props.user.recognitions}</h3>
            </div>
          </div>
        }
      </div>
    </div>
  )
};

function mapStateToProps(state) {
  return {
    user: state.userReducer.user.data
  }
};

export default connect(mapStateToProps, { getUser })(Uspa);