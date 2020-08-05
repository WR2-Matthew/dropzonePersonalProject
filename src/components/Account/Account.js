import React, { useState } from 'react';
import './Account.css';

function Account(props) {

  let [uspa, setUspa] = useState(false);

  return (
    <div className='accountHolder' >
      <div className='accountForm' >
        <div className='profilePictureHolder'>

        </div>

        <div className='accountDetailsHolder'>
          <div className='uspaCheckboxHolder'>
            <label className='accountCheckBoxLabel'>Camping</label>
            <input className='accountCheckBoxInputs'
              type='checkbox'
              name='uspa'
              checked={uspa}
              onChange={() => setUspa(!uspa)} />
          </div>
        </div>

        <div className='uspaDetailsHolder'>

        </div>
      </div>
    </div>
  )
};

export default Account;