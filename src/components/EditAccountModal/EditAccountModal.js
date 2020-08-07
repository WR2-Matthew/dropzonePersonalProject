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

          <div className='editAccountForm'>
            <AmazonDropzoneTwo photoFn={setPhoto} photo={photo} prof={props.profilePicture} />
          </div>

          <div className='uspaEditForm' >

          </div>
        </Modal>
      </div>

    </div>
  )
};

export default EditAccountModal;