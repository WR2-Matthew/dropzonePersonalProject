import React, { useState } from 'react';
import './EditAccountModal.css';
import Modal from 'react-modal';
import AmazonDropzoneTwo from '../AmazonDropzoneTwo/AmazonDropzoneTwo';
import axios from 'axios';

function EditAccountModal(props) {

  let [modalOpen, setModalOpen] = useState(false);
  let [fName, setFName] = useState(props.fName);
  let [lName, setLName] = useState(props.lName);
  let [email, setEmail] = useState(props.email);
  let [expiration, setExpiration] = useState('');
  let [memberSince, setMemberSince] = useState('');
  let [licenseNumber, setLicenseNumber] = useState('');
  let [recognitions, setRecognitions] = useState('');
  let [awards, setAwards] = useState('');
  let [recExpiration, setRecExpiration] = useState('');
  let [photo, setPhoto] = useState('');

  function submitChanges() {
    const body = { fName, lName, email, photo, expiration, memberSince, licenseNumber, recognitions, awards, recExpiration }
    axios.put(`/api/edit/account/${props.id}`, body)
      .then(res => {

      })
  };

  return (
    <div className='editAccountModalHolder'>
      <div className='editAccountButton' >
        <button onClick={() => setModalOpen(true)}><b>Edit Account Details</b></button>
      </div>

      <div className='editAccountModal'>
        <Modal
          isOpen={modalOpen}
          onRequestClose={() => setModalOpen(false)}
          style={
            {
              overlay: {
                backgroundColor: 'transparent',
              }
            }
          }>
          <div className='divider'>

            <div className='editAccountForm'>
              <AmazonDropzoneTwo photoFn={setPhoto} photo={photo} prof={props.profilePicture} />
              <div className='accountDeats'>
                <label><b>First Name:</b></label>
                <input placeholder='First Name' name='fName' value={fName} onChange={(e) => setFName(e.target.value)} />
              </div>

              <div className='accountDeats'>
                <label><b>Last Name:</b></label>
                <input placeholder='Last Name' name='lName' value={lName} onChange={(e) => setLName(e.target.value)} />
              </div>

              <div className='accountDeats'>
                <label><b>Email:</b></label>
                <input placeholder='Email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
            </div>

            <div className='uspaEditForm' >
              <div>
                <h2>USPA Membership Details</h2>
              </div>

              <div className='uspaDeats' >
                <label><b>Expiration Date:</b></label>
                <input placeholder='Expiration Date:' name='expiration' value={expiration} onChange={(e) => setExpiration(e.target.value)} />
              </div>

              <div className='uspaDeats' >
                <label><b>Member Since:</b></label>
                <input placeholder='Member Since:' name='memberSince' value={memberSince} onChange={(e) => setMemberSince(e.target.value)} />
              </div>

              <div className='uspaDeats' >
                <label><b>License Number:</b></label>
                <input placeholder='License Number:' name='licenseNumber' value={licenseNumber} onChange={(e) => setLicenseNumber(e.target.value)} />
              </div>

              <div className='uspaDeats' >
                <label><b>Recognitions:</b></label>
                <input placeholder='Recognitions:' name='recognitions' value={recognitions} onChange={(e) => setRecognitions(e.target.value)} />
              </div>

              <div className='uspaDeats' >
                <label><b>Awards:</b></label>
                <input placeholder='Awards:' name='awards' value={awards} onChange={(e) => setAwards(e.target.value)} />
              </div>

              <div className='uspaDeats' >
                <label><b>Recognition Expiration:</b></label>
                <input placeholder='Recognition Expiration:' name='recExpiration' value={recExpiration} onChange={(e) => setRecExpiration(e.target.value)} />
              </div>

              <div className='accountSubButton'>
                <button onClick={() => {
                  setModalOpen(false)
                  setFName(props.fName)
                  setLName(props.lName)
                  setEmail(props.email)
                  setExpiration('')
                  setMemberSince('')
                  setLicenseNumber('')
                  setRecognitions('')
                  setAwards('')
                  setRecExpiration('')
                }}>Disregard Changes</button>

                <button onClick={() => submitChanges()} >Save Changes</button>
              </div>
            </div>
          </div>
        </Modal>
      </div>

    </div>
  )
};

export default EditAccountModal;