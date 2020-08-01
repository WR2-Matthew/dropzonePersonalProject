import React, { useState } from 'react';
import Modal from 'react-modal';
import './AddDzModal.css';
import AmazonDropzone from '../AmazonDropzone/AmazonDropzone';
import { connect } from 'react-redux';
import { createDropzone } from '../../redux/actionCreators';

function ModalTwo(props) {

  let [modalOpen, setModalOpen] = useState(false);
  let [dzName, setDzName] = useState('');
  let [dzAddress, setDzAddress] = useState('');
  let [town, setTown] = useState('');
  let [state, setState] = useState('');
  let [altitude, setAltitude] = useState('');
  let [price, setPrice] = useState('');
  let [photo, setPhoto] = useState('');

  function submitForm(e) {
    e.preventDefault()
    // console.log('hit')

    if (!dzName || !dzAddress || !town || !state || !altitude || !price || !photo) {
      alert("All field's must be filled out to create dropzone!")
    }

    else {
      // console.log('hit')
      props.createDropzone(dzName, dzAddress, town, state, altitude, price, photo, props.user.id)
      setModalOpen(false)
    }
  };

  return (
    <div>
      <div className='dashAddDzHolder' onClick={() => setModalOpen(true)}>
        <h1>ADD NEW DROPZONE</h1>
      </div>

      <div className='modalTwoHolder' >
        <Modal
          isOpen={modalOpen}
          onRequestClose={() => {
            setModalOpen(false)
            setDzName('')
            setDzAddress('')
            setTown('')
            setState('')
            setAltitude('')
            setPrice('')
            setPhoto('')
          }}
          style={
            {
              overlay: {
                backgroundColor: 'transparent',
              }
            }
          }>
          {!props.user
            ? <div className='signInNotificationHolder'>
              <button className='modalExitButton' onClick={() => setModalOpen(false)}>X</button>
              <h1>Must be logged in to create a dropzone!</h1>
            </div>
            :
            <form className='addDzForm'>
              <div>
                <div className='modalButtonHolder'>
                  <button className='modalExitButton' onClick={() => {
                    setModalOpen(false)
                    setDzName('')
                    setDzAddress('')
                    setTown('')
                    setState('')
                    setAltitude('')
                    setPrice('')
                    setPhoto('')
                  }}>X</button>
                </div>

                <div className='mainDzDetails' >
                  <div className='modalTwoDzNameHolder' >
                    <input placeholder='Dropzone Name' name='dzName' value={dzName} onChange={(e) => setDzName(e.target.value)} />
                    {/* <label><b>Dropzone Name:</b></label> */}
                  </div>

                  <div className='modalTwoDzNameHolder' >
                    <input placeholder='Dropzone Address' name='dzAddress' value={dzAddress} onChange={(e) => setDzAddress(e.target.value)} />
                    {/* <label><b>Dropzone Street:</b></label> */}
                  </div>

                  <div className='modalTwoDzNameHolder' >
                    <input placeholder='Dropzone Town' name='town' value={town} onChange={(e) => setTown(e.target.value)} />
                    {/* <label><b>Town:</b></label> */}
                  </div>

                  <div className='modalTwoDzNameHolder' >
                    <input placeholder='Dropzone State' name='state' value={state} onChange={(e) => setState(e.target.value)} />
                    {/* <label><b>State:</b></label> */}
                  </div>
                </div>
              </div>

              <div className='amazonImageHolder'>
                <AmazonDropzone photoFn={setPhoto} />
              </div>

              <div className='dzJumpDetailsHolder' >
                <div className='dzJumpDetail'>
                  <div className='dzJumpDets' >
                    <input placeholder='Jump Ticket Price' name='price' value={price} onChange={(e) => setPrice(e.target.value)} />
                  </div>

                  <div className='dzJumpDetails' >
                    <input placeholder='Exit Altitude' name='altitude' value={altitude} onChange={(e) => setAltitude(e.target.value)} />
                  </div>
                </div>

                <div className='addModalCreateButton'>
                  <button onClick={(e) => submitForm(e)}>Create Dropzone!</button>
                </div>
              </div>

            </form>
          }


        </Modal>
      </div>
    </div >
  )
};

const mapDispatchToProps = {
  createDropzone
};

function mapStateToProps(state) {

  return {
    user: state.userReducer.user.data
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalTwo);